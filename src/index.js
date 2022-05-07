import POP from "sonpop-js";
import appContainer from "./app-container";
import "./styles/index.css";

// app container is just a wrapper and doesn't have state, components within the wrapper have state

POP.root(appContainer, "pop-app-root"); // entry point for pop! app with custom root name
