import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';


class Favourite extends React.Component {
    renderheart = () => {
        let heartFill = 'far';
        if (this.props.auth){
            heartFill = this.props.auth._favourites.find(element => element === this.props.id) ? 'fas' : 'far'
            return <i className ={`${heartFill} fa-heart fa-lg`} />
        } 
        return <i className ={`${heartFill} fa-heart fa-lg`} />
    }
    takeAction = () => {
        const id = this.props.id;
        console.log(id)
        if (this.props.auth) {
            this.props.auth._favourites.find(element => element === id) ? this.props.removeFavourite(id) : this.props.addFavourite(id);
        } else {
            return 'please login to perform action';
        }
    }
    render() {
        return (
            <>
                <span className="level-item" onClick={this.takeAction}>
                        <span className="icon has-text-danger">
                            {this.renderheart()}
                        </span>
                </span>
            </>
        )
    }
    
}

const mapStateToProps = ({auth}) => {
    return {auth};
}

export default connect(mapStateToProps, actions)(Favourite);