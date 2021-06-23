//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
/* import { Home } from "./component/home.js"; */

import { createStore } from "redux";

const actionIncremented = {
	type: "@counter/incremented"
};
const actionDecremented = {
	type: "@counter/decremented"
};
const actionReseted = {
	type: "@counter/reseted"
};

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case "@counter/incremented":
			return state + 1;
		case "@counter/decremented":
			return state - 1;
		case "@counter/reseted":
			return 0;
		default:
			return state;
	}
};
const store = createStore(counterReducer);

/* imprime en consola cada vez que haya un cambio */
/* store.subscribe(() => {
	console.log(store.getState());
}); */

const App = () => {
	return (
		<div className="text-center mt-5">
			{store.getState()}
			<h1>Hola mundo kelokeeee .</h1>
			<button
				onClick={() => {
					store.dispatch(actionIncremented);
				}}>
				+
			</button>
			<button
				onClick={() => {
					store.dispatch(actionDecremented);
				}}>
				-
			</button>
			<button
				onClick={() => {
					store.dispatch(actionReseted);
				}}>
				Reset
			</button>
		</div>
	);
};

const renderApp = () => {
	ReactDOM.render(<App />, document.querySelector("#app"));
};

renderApp();
store.subscribe(renderApp);
