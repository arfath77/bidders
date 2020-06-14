import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions';

class Header extends React.Component {
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
                        <button className="button is-primary">Post Add</button>
                        <button onClick={() => this.props.logout()} className="button is-light">Logout</button>
                    </div>
                );
        }
    }
    render() {
        return (
            <div>
                
                <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                        BIDDERS
                        </a>
                        {/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        </a> */}
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
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

export default connect(mapStateToProps, actions)(Header);