import React from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';

class ShowElement extends React.Component {
    componentDidMount(){
        this.props.fetchOne(this.props.match.params.id);
    }
    renderContent = () => {
        return(
            <div>
                {this.props.mylist}
            </div>
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

const mapStateToProps = state => {
    return {mylist : state.mylist}
}
export default connect(null,actions)(ShowElement);