import React from 'react';
import {CardElement} from "@stripe/react-stripe-js";


const PaymentForm = (props) => {
    const cardStyle = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#32325d"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      };
      return (
        <CardElement id="card-element" options={cardStyle} onChange={props.handleChange} />
      )
}

export default PaymentForm;