import React from 'react';
import {connect} from 'react-redux';

import ShowList from '../template/ShowList';
import * as actions from '../../actions';

class MyRequirement extends React.Component {
    componentDidMount(){
        this.props.fetchMyList(this.props.auth._id);
    }
    render(){
        return(
            <div>
                <ShowList list={this.props.mylist}/>
            </div>
        )
    }
}

const mapStateToProps = ({auth, mylist}) => {
    return (auth, mylist);
}

export default connect(mapStateToProps,actions)(MyRequirement);