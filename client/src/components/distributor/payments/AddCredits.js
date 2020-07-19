import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import FormTemplate from "../../form/FormTemplate";
import { creditInput, creditBtn } from "./creditInput";
import CheckoutForm from "./CheckoutForm";

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

class AddCredits extends React.Component {
	// state = {showCheckout: false, amount: 0, succeeded:false};
	state = { showCheckout: false, amount: 0 };
	renderCheckoutForm = () => {
		if (this.state.showCheckout) {
			return (
				<div className="App">
					<Elements stripe={promise}>
						{/* <CheckoutForm amount={this.state.amount} onSuccess={() => this.setState({succeeded:true})}/> */}
						<CheckoutForm
							amount={this.state.amount}
							onExit={this.props.onExit}
						/>
					</Elements>
				</div>
			);
		}
	};
	renderContent = () => {
		// if (this.state.succeeded){
		//     return (
		//         <>
		//             <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
		//                 <circle className="checkmark__circle" cx="30" cy="30" r="29" fill="none"/>
		//                 <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
		//             </svg>
		//             <p className="result-message">
		//                 Payment succeeded
		//             </p>
		//             <button onClick={()=> this.setState({succeeded:false, showCheckout: false})} className="button is-light">AddCredits</button>
		//             <button onClick={this.props.onExit} className="button is-danger">Exit</button>
		//         </>
		//     )
		// }
		return (
			<>
				<FormTemplate
					modal
					form="payment"
					formData={creditInput}
					formBtn={creditBtn}
					onSubmit={formValues =>
						this.setState({ showCheckout: true, amount: formValues.amount })
					}
				/>
				{this.renderCheckoutForm()}
			</>
		);
	};
	render() {
		return <div style={{ alignContent: "center" }}>{this.renderContent()}</div>;
	}
}

export default AddCredits;
