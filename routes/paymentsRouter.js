const mongoose = require('mongoose');
const keys = require('../config/keys');
const fetchUser = require('../helper/fetchUser');

const isSignedIn = require('../middleware/isSignedIn');
const User = mongoose.model('users');
const stripe = require('stripe')(keys.stripeKey)


module.exports = (app) => {
    app.post("/api/stripeintent", isSignedIn, async (req, res) => {
        const { amount } = req.body;
        const {email} = fetchUser(req.session.userId);
        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency: "usd",
          email,
          metadata: { userId : req.session.userId, requestProcessed: false, amount }
        });
        res.send({clientSecret: paymentIntent.client_secret});
    });

    app.post('/api/addCredits', isSignedIn, async(req, res) => {
		const { metadata } = await stripe.paymentIntents.retrieve(req.body.paymentId);
		if (metadata.userId === req.session.userId && metadata.requestProcessed === 'false') {
      metadata.amount = metadata.amount / 100 ;
			const { _id, email, name, authority, credits, _favourites } = await User.findOneAndUpdate(
				{ _id: req.session.userId },
        {$inc: { credits: metadata.amount}},
        {$new: true}
			);
			await stripe.paymentIntents.update(req.body.paymentId, {
				metadata: { requestProcessed: true }
			});
			return res.send({ _id, email, name, authority, credits, _favourites });
		}
		return res.status(409).send('The request is already processed/invalid.');
    })
}

