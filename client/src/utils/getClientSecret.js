import axios from 'axios';

const getClientSecret = async(amount) => {
    const secretKey = await axios.post('/api/stripeintent', amount);
    return secretKey;
}

export default getClientSecret;