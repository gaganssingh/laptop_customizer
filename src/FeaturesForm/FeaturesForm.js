import React from "react";
import FeatureItem from "../FeatureItem/FeatureItem";

class FeaturesForm extends React.Component {
	render() {
		return (
			<form className="main__form">
				<h2>Customize your laptop</h2>
				<FeatureItem
					features={this.props.features}
					selected={this.props.selected}
					updateFeature={this.props.updateFeature}
				/>
			</form>
		);
	}
}

export default FeaturesForm;
