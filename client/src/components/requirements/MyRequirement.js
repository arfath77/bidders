import React from 'react';
import {connect} from 'react-redux';
import ContentLoader from 'react-content-loader';

import ShowList from '../template/ShowList';
import * as actions from '../../actions';

class MyRequirement extends React.Component {
    componentDidMount(){
        this.props.fetchMyList();
    }
    renderContent = () => {
        if (!this.props.mylist.length) {
            return (
                <section className="section">
                    <ContentLoader />
                </section>
            );
        }
        return (
            <ShowList list={this.props.mylist}/>
        )
     
    }
    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {mylist : state.mylist};
}

export default connect(mapStateToProps,actions)(MyRequirement);