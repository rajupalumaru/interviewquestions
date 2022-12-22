import React, { useReducer, useState } from 'react';
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + action.value;
        case 'decrement':
            return state - action.value;
        case 'multiplication':
            return state * action.value;
        default:
            return state;
    }

}
const ReducerExample = () => {
    const [count, setCount] = useState(0);
    const initialState = 0;
    const [red, dispatch] = useReducer(reducer, initialState);

    const addOne = () => {
        dispatch({
            type: 'increment',
            value: 1
        })
    }
    const mutiply = () => {
        dispatch(
            {
                type: 'multiplication',
                value: 2
            }
        )
    }
    const handleChnage = (e) => {
        setCount(+e.target.value);
    }

   
    const inputAdd = () => {
        dispatch({
            type: 'increment',
            value: count
        })
    }
    return (
        <div>
            <div>
                <h1>value is :{red}</h1>
                <button onClick={addOne}>Add1</button>
                <button onClick={() => { dispatch({ type: 'decrement', value: 1 }) }}>sub1</button>
                <button onClick={mutiply}>mutiply 2</button>
                <input  onChange={handleChnage}></input>
                <button onClick={inputAdd}>Input Add</button>
            </div>
            <div>
                <button onClick={addOne}>Increment</button>
                <input value={red} onChange={handleChnage}></input>
                <button onClick={() => { dispatch({ type: 'decrement', value: 1 }) }}>Decrement</button>
            </div>
        </div>
    )
}
export default ReducerExample;