import POP from "sonpop-js";

export const buttonComponent = {
	render: (component) => {
		// get object keys as const values
		// because no modification is done
		const { customLabel, onClickFunc } = component.props;

		return POP.create(
			"button|class=action-btn",
			[customLabel ? customLabel : ""],
			{ onclick: onClickFunc }
		);
	},
};

export default buttonComponent;
