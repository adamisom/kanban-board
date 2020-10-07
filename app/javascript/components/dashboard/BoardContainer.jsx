import { connect } from "react-redux";
import Board from "./Board";
import * as actions from "../../actions/BoardActions";

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards.find(board => +ownProps.match.params.id === board.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetBoard: () => {
      dispatch(actions.getBoard(+ownProps.match.params.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
