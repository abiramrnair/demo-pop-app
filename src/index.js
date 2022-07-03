import POP from "sonpop-js";
import appContainer from "./app-container";
import "./styles/index.css";

// optionally have some routes passed in with popRoutes key
// const routes = {
// 	"/home": appContainer,
// };

POP.root(appContainer, { rootName: "pop-app-root" }); // entry point for pop! app with custom root name
