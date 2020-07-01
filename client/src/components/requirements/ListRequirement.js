import React from 'react';
import {connect} from 'react-redux';

import ShowList from '../template/ShowList';
import * as actions from '../../actions';

class ListRequirement extends React.Component {
    componentDidMount(){
        this.props.fetchList();
    }
    render(){
        return(
            <div>
                <ShowList list={this.props.list}/>
            </div>
        )
    }
}

const mapStateToProps = ({list}) => {
    return {list};
}

export default connect(mapStateToProps,actions)(ListRequirement);