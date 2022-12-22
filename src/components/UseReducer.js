import React, { useEffect, useReducer, useState } from 'react';


function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          count: state.count +action.value 
        };
      default:
        throw new Error("cannot found this action type");
    }
  }

const UseReducer = () => {
    const [count, setCount] = useState(0);

    const [red, dispatch] = useReducer(reducer, 0);


    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1);
            dispatch({ type: 'increment', value: 5 })
        }
    }, [])

    useEffect(() => {
        console.log("count", count);
    }, [count])

    useEffect(() => {
        console.log('useReducer', red);
    }, [red])

    return (
        <div>
            <p>Practice</p>
            {count}
            
        </div>
    )
}

export default UseReducer; 