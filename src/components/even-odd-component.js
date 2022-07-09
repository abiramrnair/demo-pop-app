import POP from "sonpop-js";

export const evenOddComponent = {
	render: () => {
		// we can access component state globally
		const counterState = POP.getState("pop-app-counter");
		const isEven = counterState.counterVal % 2 === 0;

		return POP.create("span|class=even-odd-indicator", [
			`That is ${isEven ? "even" : "odd"}!`,
		]);
	},
};

export default evenOddComponent;
