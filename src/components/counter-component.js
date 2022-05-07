import POP from "sonpop-js";
import buttonComponent from "./button-component";

export const counterComponent = {
	set: (state) => {
		state.counterVal = 0;
	},
	render: (component) => {
		const { state } = component; // get the state object

		// we pass in label and onclick props to the same component to create two buttons
		return POP.create("div|class=counter-container", [
			POP.use(buttonComponent, {
				customLabel: "-",
				onClickFunc: () => (state.counterVal -= 1),
			}),
			POP.create("span|class=counter-display", [`${state.counterVal}`]),
			POP.use(buttonComponent, {
				customLabel: "+",
				onClickFunc: () => (state.counterVal += 1),
			}),
		]);
	},
};

export default counterComponent;
