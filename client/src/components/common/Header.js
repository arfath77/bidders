import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions";
import AddCredits from "../distributor/payments/AddCredits";
import Modal from "../../components/Modal";

class Header extends React.Component {
	state = { isModal: false };
	onExit = () => this.setState({ isModal: false });
	showModal = () => {
		if (this.state.isModal) {
			return (
				<Modal title="Add Credits" onExit={this.onExit}>
					<AddCredits onExit={this.onExit} />
				</Modal>
			);
		}
	};
	renderBtn = () => {
		if (this.props.auth.authority === "Retailer") {
			return (
				<>
					<Link to="/requirement/create" className="button is-primary">
						Post Ad
					</Link>
					<Link to="/requirement/myAdds" className="button is-primary">
						My Ads
					</Link>
				</>
			);
		} else if (this.props.auth.authority === "Distributor") {
			return (
				<>
					<span className="button" disabled>
						Credits: $ {this.props.auth.credits || 0.0}{" "}
					</span>
					<button
						onClick={() => this.setState({ isModal: true })}
						className="button is-primary"
					>
						<strong>Add credits</strong>
					</button>
					<Link to="/distributor/myBids" className="button">
						My bids
					</Link>
				</>
			);
		}
	};
	renderContent = () => {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<div className="buttons">
						<Link to="/signup" className="button is-primary">
							<strong>Signup</strong>
						</Link>
						<Link to="/signin" className="button is-primary">
							<strong>Signin</strong>
						</Link>
					</div>
				);
			default:
				return (
					<div className="buttons">
						{this.renderBtn()}
						<button
							onClick={() => this.props.logout(this.props.history)}
							className="button"
						>
							Logout
						</button>
						<span>Howdy, {this.props.auth.name}</span>
					</div>
				);
		}
	};
	render() {
		return (
			<div className="bottom">
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/">
							BIDDERS
						</Link>
						{/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        </a> */}
					</div>
					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							<div className="navbar-item">
								<Link to="/requirement/list" className="button">
									All Ads
								</Link>
							</div>
						</div>
						<div className="navbar-end">
							<div className="navbar-item">
								{this.renderContent()}
								{this.showModal()}
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(withRouter(Header));
