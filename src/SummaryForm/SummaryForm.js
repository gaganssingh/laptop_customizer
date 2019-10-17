import React from "react";
import SummaryList from "../SummaryList/SummaryList";
import Total from "../Total/Total";

class SummaryForm extends React.Component {
	render() {
		return (
			<section className="main__summary">
				<h2>Your cart</h2>
				<SummaryList selected={this.props.selected} />
				<Total total={this.props.total} />
			</section>
		);
	}
}

export default SummaryForm;
