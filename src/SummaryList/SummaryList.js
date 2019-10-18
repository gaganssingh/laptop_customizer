import React from "react";
import SummaryOption from "../SummaryOption/SummaryOption";

export default function SummaryList(props) {
	return Object.keys(props.selected).map((feature, idx) => {
		const featureHash = feature + "-" + idx;
		const selectedOption = props.selected[feature];

		return <SummaryOption key={idx} feature={feature} featureHash={featureHash} selectedOption={selectedOption} />;
	});
}
