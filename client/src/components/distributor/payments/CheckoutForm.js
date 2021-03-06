import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { connect } from "react-redux";

import PaymentForm from "./PaymentForm";
import getClientSecret from "../../../utils/getClientSecret";
import * as actions from "../../../actions";
import "./PaymentForm.css";

const CheckoutForm = props => {
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState("");
	const stripe = useStripe();
	const elements = useElements();

	const handleChange = async event => {
		// Listen for changes in the CardElement
		// and display any errors as the customer types their card details
		setError(event.error ? event.error.message : "");
	};

	const handleSubmit = async ev => {
		ev.preventDefault();
		setProcessing(true);
		const payload = await stripe.confirmCardPayment(
			await getClientSecret(props.amount),
			{
				payment_method: {
					card: elements.getElement(CardElement),
				},
			}
		);
		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setProcessing(false);
			await props.addCredits(payload.paymentIntent.id);
			props.onExit();
		}
	};
	return (
		<form id="payment-form" onSubmit={handleSubmit}>
			<PaymentForm handleChange={handleChange} />
			<button disabled={!stripe} id="submit">
				<span id="button-text">
					{processing ? <div className="spinner" id="spinner"></div> : "Pay"}
				</span>
			</button>
			{/* Show any error that happens when processing the payment */}
			{error && (
				<div className="card-error" role="alert">
					{error}
				</div>
			)}
		</form>
	);
};

export default connect(null, actions)(CheckoutForm);
