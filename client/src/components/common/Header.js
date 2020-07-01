import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../../actions';

class Header extends React.Component {
    renderBtn = () => {
        if (this.props.auth.authority === 'Retailer'){
            return (
                <>
                    <Link to="/requirement/create" className="button is-primary">Post Add</Link>
                    <Link to="/requirement/myAdds" className="button is-primary">My Adds</Link>
                </>
            )
        } else if(this.props.auth.authority === 'Distributors') {
            return(
                <Link to="/distributor/myBids" className="button is-primary">My Bids</Link>
            )
        }
    }
    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return  (<div className="buttons">
                            <Link to="/signup" className="button is-primary">
                                <strong>Sign up</strong>
                            </Link>
                            <Link to="/signin" className="button is-light">
                                Log in
                            </Link>
                        </div>
                );
            default:
                return (
                    <div className="buttons">
                        {this.renderBtn()}
                        <button onClick={() => this.props.logout(this.props.history)} className="button is-light">Logout</button>
                    </div>
                );
        }
    }
    render() {
        return (
            <div>
                
                <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
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
                                <Link to="/requirement/list" className="button">All Adds</Link>
                            </div>
                        </div>
                        <div className="navbar-end">
                        <div className="navbar-item">
                            {this.renderContent()}
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {auth: state.auth}
}

export default connect(mapStateToProps, actions)(withRouter(Header));