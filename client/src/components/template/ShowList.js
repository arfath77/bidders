import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import time_ago_in_words from 'time_ago_in_words';

import {deleteRequirement} from '../../actions';
import Favourite from '../common/Favourite';

class ShowList extends React.Component {
    renderImage = (images = []) => {
        return images.length ? images[0] : 'https://bulma.io/images/placeholders/128x128.png';
    }

    renderMeta = (element) => {
        const {_id, _user} = element
        if (this.props.auth){
            if (this.props.auth.authority === 'Retailer' && this.props.auth._id===_user){
                return(
                    <div className="level-left">
                        <span className="level-item">
                            <Link to={{pathname: `/requirement/edit/${_id}`, state: {element}}} className="icon has-text-info">
                                <i className="far fa-edit fa-lg" />
                            </Link>
                        </span>
                        <span onClick={() => this.props.deleteRequirement(_id, this.props.history)} className="level-item">
                            <span className="icon has-text-danger">
                                <i className="far fa-trash-alt fa-lg" />
                            </span>
                        </span>
                    </div>
                )
            }
        }
        return (
            <div className="level-left">
                <span className="level-item">
                    <span className="icon has-text-info">
                        <i className="far fa-envelope fa-lg" />
                    </span>
                </span>
                <Favourite id={_id}/>
            </div>
        )
    }

    renderContent = (list) => {        
        return (
            list.map((element) => {
                //card for each elements
                return (
                    <div key={element._id} className="box">
                        <article className="media is-relative top">
                            <figure className="media-left">
                                <p className="image is-128x128">
                                    <img alt="" src={this.renderImage(element.images)} />
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <Link to={{pathname: `/requirement/list/${element._id}`, state: {element}}}>
                                        <h3 className="title">{element.title}</h3>
                                    </Link>
                                    <div className="level-left">
                                        <span className="tag is-info is-light is-medium bottom-absolute">{element.category}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="media-right">
                                <div className="bottom-absolute right-absolute left">
                                    {/* reply and favourite icon for each element */}
                                    {this.renderMeta(element)}
                                </div>
                                <div className="level-left bottom-absolute right-absolute">
                                    <span className="tag is-light">
                                        Posted {time_ago_in_words(new Date(element.datePosted).toLocaleDateString())}
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>
                )
            })
        )
    }

    render(){
        return(
            <div>
                {this.renderContent(this.props.list)}
            </div>
        )
    }
}

const mapStateToProps = ({auth}) =>{
    return {auth}
}

export default connect(mapStateToProps,{deleteRequirement})(withRouter(ShowList));