export default function cards(state = [], action) {
	switch (action.type) {
		case "FETCH_BOARD_SUCCESS":
			const lists = action.board.lists;
			return lists.flatMap((list) => {
				return list.cards.map((card) => {
					return Object.assign({}, card, { list_id: list.id });
				});
			});
		default:
			return state;
	}
}
