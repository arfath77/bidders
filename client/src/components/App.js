import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux'

import * as actions from '../actions';
import Header from './Header';
import Homepage from './Homepage';
import Signin from './authentication/Signin';
import Signup from './authentication/Signup';


class App extends React.Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={Homepage} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/signin" component={Signin} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

// const mapStateToProps = ({auth}) => {
//     return {auth}
// }
export default connect(null, actions)(App);