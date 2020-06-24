import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux'

import * as actions from '../actions';
import Header from './common/Header';
import Footer from './common/Footer';
import requirementsRoutes from '../routes/requirementsRoutes';
import distributorsRoutes from '../routes/distributorsRoutes';
import ScrollToTop from './common/ScrollToTop';


class App extends React.Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
                <BrowserRouter>
                    <ScrollToTop>
                        <div className="container">
                            <Header />
                            {commonRoutes()}
                            {requirementsRoutes()}
                            {distributorsRoutes()}
                            <Footer />
                        </div>
                    </ScrollToTop>
                </BrowserRouter>
        )
    }
}

// const mapStateToProps = ({auth}) => {
//     return {auth}
// }
export default connect(null, actions)(App);