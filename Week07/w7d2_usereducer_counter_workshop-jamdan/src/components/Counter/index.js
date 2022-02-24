import React, { useReducer } from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_COUNT':
			return { ...state, count: state.count + 1 };

		case 'TAKE_FROM_COUNT':
			return { ...state, count: state.count - 1 };
		default:
			throw new Error();
	}
}

function Counter() {
	const [count, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<div>
			<button onClick={() => dispatch({ type: 'ADD_TO_COUNT', payload: count })}>+</button>
			<p>{count.count}</p>
			<button onClick={() => dispatch({ type: 'TAKE_FROM_COUNT', payload: count })}>-</button>
		</div>
	);
}

export default Counter;
