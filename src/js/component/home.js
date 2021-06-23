/* import React from "react";
import ReactDOM from "react-dom";
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

store.subscribe(() => {
	console.log(store.getState());
});

export function Home() {
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
}
/* renderApp()
store.subscribe(renderApp) */
