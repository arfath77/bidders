import React from 'react';
import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader';
import time_ago_in_words from 'time_ago_in_words';

import * as actions from '../../actions';
import Favourite from '../common/Favourite';


class ShowElement extends React.Component {
    state = { mainImage: 'https://bulma.io/images/placeholders/480x320.png', initialValues: null}
    async componentDidMount(){
        this.renderValues();
        // await this.props.fetchOne(this.props.match.params.id);
        this.setState({mainImage: this.props.initialValues.images[0]})
    }
    setMainImage = url => {
		this.setState({ mainImage: url });
	};
	renderThumbnail = (image, i) => (
		<figure key={i} onClick={() => this.setMainImage(image)} className="image is-96x96 is-inline-block mr-1">
			<img src={image} alt="listing sample" />
		</figure>
	);
	renderImages = (images = []) => {
		return images.map((image, i) => this.renderThumbnail(image, i))
    };
    renderValues = async () => {
        if (this.props.location.state){
            return this.setState({initialValues : this.props.location.state.element}) 
        }
        await this.props.fetchOne(this.props.match.params.id);
        this.setState({initialValues: this.props.elem[0] })
    }
    renderContent = () => {
        if (!this.props.initialValues) {
			return (
				<section className="section">
					<ContentLoader />
				</section>
			);
        } else {
            return (
                <>
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-3by2">
                                        <img
                                            className="object-fit-cover"
                                            src={this.state.mainImage}
                                            alt="main listing"
                                        />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media-left">{this.renderImages(this.props.initialValues.images)}</div>
                                    <div className="content">
                                        <h1 className="title is-2">{this.props.initialValues.title}</h1>
                                        <div className="level">
                                            <div className="level-left field is-grouped is-grouped-multiline">
                                                <div className="control">
                                                    <span className="tags has-addons level-item">
                                                        <span className="tag">Category</span>
                                                        <span className="tag is-info is-light">
                                                            {this.props.initialValues.category}
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="control">
                                                    <span className="tags has-addons level-item">
                                                        <span className="tag">Quantity</span>
                                                        <span className="tag is-info is-light">
                                                            {this.props.initialValues.quantity}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="level-right">
                                                <span className="level-item tags has-addons level-item">
                                                    <span className="tag icon">
                                                        <i className="fas fa-clock" />
                                                    </span>
                                                    <span className="tag is-light">
                                                        {time_ago_in_words(
                                                            new Date(this.props.initialValues.datePosted)
                                                        )}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <hr /> <h2 className="title description is-4">Description </h2>
                                        <p>{this.props.initialValues.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <div className="has-text-centered">
                                        <Favourite id={this.props.initialValues._id} />
                                    </div>
                                    <hr />
                                    <span className="has-text-grey-dark mb-1">Retailer Information</span>
                                    <div className="media mt-2">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img
                                                    className="is-rounded"
                                                    src={`https://ui-avatars.com/api/?name=${this.props.initialValues._user.name}&background=3298dc&color=fff&format=svg`}
                                                    alt="retailer"
                                                />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">{this.props.initialValues._user.company}</p>
                                            <p className="subtitle is-6 has-text-grey">
                                                Member since{' '}
                                                {time_ago_in_words(new Date(this.props.initialValues._user.dateRegistered))}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <button className="button is-primary is-normal is-fullwidth">
                                            <span className="icon is-small">
                                                <i className="far fa-envelope" />
                                            </span>
                                            <span>Send a quote</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )

        }      
        
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
    return {elem : state.mylist}
}
export default connect(mapStateToProps,actions)(ShowElement);