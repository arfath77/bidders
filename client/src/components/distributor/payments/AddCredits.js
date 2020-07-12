import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import FormTemplate from '../../form/FormTemplate';
import {creditInput, creditBtn} from './creditInput';
import CheckoutForm from "./CheckoutForm";
import Modal from '../../Modal';

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

class AddCredits extends React.Component {
    state = {showCheckout: false, amount: 0};

    renderCheckoutForm = () => {
        if (this.state.showCheckout){
            return (
                <div className="App">
                    <Elements stripe={promise}>
                        <CheckoutForm amount={this.state.amount}/>
                    </Elements>
                </div>
            )
        }
    } 
    renderModal = () => {
        return(
            <Modal>
                <FormTemplate form="payment" 
                    formData={creditInput} 
                    formBtn={creditBtn}
                    onSubmit={(formValues) => this.props.setState({showCheckout:true, amount:formValues.amount})}
                />
                {this.renderCheckoutForm()}
            </Modal>
        )
    }
    render(){
        console.log('in Addcredits');
        return(
            <>
                {this.renderModal()}
            </>
        )}
}

export default AddCredits;