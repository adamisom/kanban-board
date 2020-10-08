import { connect } from "react-redux";
import ListListing from "./ListListing";

const mapStateToProps = (state) => {
	return {
		lists: state.lists,
	};
};

export default connect(mapStateToProps, null)(ListListing);
