import axios from 'axios';

const getClientSecret = async(amount) => {
    amount = amount * 100;
    const secretKey = await axios.post('/api/stripeintent', {amount});
    return secretKey.data.clientSecret;
}

export default getClientSecret;