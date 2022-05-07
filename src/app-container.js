import POP from "sonpop-js";
import counterComponent from "./components/counter-component";
import evenOddComponent from "./components/even-odd-component";

export const appContainer = {
	render: () => {
		return POP.create("div|class=pop-app-container", [
			POP.create("div|class=title", [
				"pop!",
				POP.create("span|class=js-span", ["JS"]),
			]),
			POP.create("div|class=subtitle", ["Frontend made easy."]),
			POP.use(counterComponent, { stateKey: "pop-app-counter" }),
			POP.use(evenOddComponent),
		]);
	},
};

export default appContainer;
