import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const mapStateToProps = (state, ownProps) => {
	return {
		cards: state.cards.filter((card) => card.list_id === ownProps.id),
	};
};

function CardContainer({ cards }) {
	return (
		<div id="cards-container" data-id={`list-${cards[0].list_id}-cards`}>
			{cards.map((card) => (
				<Card card={card} key={card.id} />
			))}
		</div>
	);
}

export default connect(mapStateToProps, null)(CardContainer);
