export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS":
      return action.boards;
    case "CREATE_BOARD_SUCCESS":
      const newBoard = action.board;
      return state.concat(newBoard);
    case "FETCH_BOARD_SUCCESS":
      const { title, id, created_at, updated_at } = action.board;
      const boardId = state.findIndex(board => board.id === id);
      if (boardId === -1) {
        return state.concat({ title, id, created_at, updated_at });
      } else {
        return state.map(board => {
          return board.id === id
            ? { title, id, created_at, updated_at }
            : board;
        });
      }
      return state;
    default:
      return state;
  }
}
