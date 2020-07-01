import React from 'react';
import {connect} from 'react-redux';

import ShowList from '../template/ShowList';
import * as actions from '../../actions';

class MyRequirement extends React.Component {
    componentDidMount(){
        this.props.fetchMyList();
    }
    render(){
        return(
            <div>
                <ShowList list={this.props.mylist}/>
            </div>
        )
    }
}

const mapStateToProps = ({mylist}) => {
    return {mylist};
}

export default connect(mapStateToProps,actions)(MyRequirement);