import React from "react";
import { connect } from "react-redux";
import ContentLoader from "react-content-loader";

import ShowList from "../template/ShowList";
import * as actions from "../../actions";
import SearchRequirement from "../common/SearchRequirement";

class ListRequirement extends React.Component {
	state = { mySearch: false };

	componentDidMount() {
		this.props.fetchList();
	}

	renderList = () => {
		let myList = [];
		if (this.state.mySearch) {
			myList = this.props.search;
			console.log("on search click");
		} else {
			myList = this.props.list;
		}
		console.log(this.props);
		console.log(this.state.mySearch);

		return myList;
	};

	onSearch = async formValues => {
		await this.props.search(formValues);
		this.setState({ mySearch: true });
	};

	renderContent = () => {
		const myList = this.renderList();
		if (!myList.length) {
			return (
				<section className="section">
					<ContentLoader />
				</section>
			);
		}
		return (
			<>
				<SearchRequirement
					onSearch={this.onSearch}
					onClear={() => this.setState({ mySearch: false })}
				/>
				<ShowList list={myList} />
			</>
		);
	};
	render() {
		return <>{this.renderContent()}</>;
	}
}

const mapStateToProps = state => {
	return { list: state.list, search: state.search };
};

export default connect(mapStateToProps, actions)(ListRequirement);
