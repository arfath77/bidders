import React from 'react';
import {connect} from 'react-redux';
import ContentLoader from 'react-content-loader';

import ShowList from '../template/ShowList';
import * as actions from '../../actions';


class ListRequirement extends React.Component {
    componentDidMount(){
        this.props.fetchList();
    }
    renderContent = () => {
        if (!this.props.list.length) {
            return (
                <section className="section">
                    <ContentLoader />
                </section>
            );
        }
        return (
            <ShowList list={this.props.list}/>
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

const mapStateToProps = ({list}) => {
    return {list};
}

export default connect(mapStateToProps,actions)(ListRequirement);