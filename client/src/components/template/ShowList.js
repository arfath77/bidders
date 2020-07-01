import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

// import ShowElement from './ShowElement';
import * as actions from '../../actions';

class ShowList extends React.Component {
    renderImage = (images = []) => {
        return images.length ? images[0] : 'https://bulma.io/images/placeholders/128x128.png';
    }

    componentDidMount(){
        this.props.fetchList();
    }

    renderMeta = (id, _user) => {
        if (this.props.auth){
            if (this.props.auth.authority === 'Retailer' && this.props.auth._id===_user){
                return(
                    <div className="level-left">
                        <span className="level-item">
                            <Link to={`/requirement/edit/${id}`} className="icon has-text-info">
                                <i className="far fa-edit fa-lg" />
                            </Link>
                        </span>
                        <span onClick={() => this.props.deleteRequirement(id, this.props.history)} className="level-item">
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
                <span className="level-item">
                    <span className="icon has-text-danger">
                        <i className="far fa-heart fa-lg" />
                    </span>
                </span>
            </div>
        )
    }

    renderContent = (list) => {        
        return (
            list.map((element) => {
                //card for each elements
                return (
                    <div key={element._id} className="box">
                        <article className="media is-relative">
                            <figure className="media-left">
                                <p className="image is-128x128">
                                    <img alt="" src={this.renderImage(element.images)} />
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <Link to={`/requirement/list/:${element._id}`}>
                                        <h3 className="title">{element.title}</h3>
                                    </Link>
                                    <div className="level-left">
                                        <span className="tag is-info is-light is-medium bottom-absolute">{element.category}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="media-right">
                                {/* reply and favourite icon for each element */}
                                {this.renderMeta(element._id, element._user)}
                                <div className="level-left">
                                    <span className="level-item">
                                        <span className="icon has-text-info">
                                            <i className="far fa-envelope fa-lg" />
                                        </span>
                                    </span>
                                    <span className="level-item">
                                        <span className="icon has-text-danger">
                                            <i className="far fa-heart fa-lg" />
                                        </span>
                                    </span>
                                </div>
                                <div className="level-left bottom-absolute right-absolute">
                                    <span className="tag is-light">Posted on {new Date(element.datePosted).toLocaleDateString()}</span>
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

export default connect(mapStateToProps,actions)(withRouter(ShowList));