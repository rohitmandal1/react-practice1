import React, { useReducer } from 'react'

const initialState = {
    firstcounter: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return state +1
        case 'Decrement':
            return state -1
        case 'Reset':
            return initialState
        case 'default':
            return state            
    }
}

function Counterone() {
    const [count, dispatch] =useReducer(reducer,initialState);
    return (
        <div>
            <div>{count.firstcounter}</div>
            <button onClick={ ()=>dispatch({type: 'Increment'})}>Increment</button>
            <button onClick={ ()=>dispatch({type: 'Decrement'})}>Decrement</button>
            <button onClick={ ()=>dispatch({type: 'Reset'})}>Reset</button>
        </div>
    )
}

export default Counterone;
