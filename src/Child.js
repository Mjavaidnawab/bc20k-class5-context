import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () =>{
    let counterValue = useContext(counterContext)
    console.log(counterContext)
    return(
        <div>
            <h1>This is first child using counter context</h1>
    <h4>In Child 1 Counter Value is : { counterValue[0]} </h4>
    <button onClick={()=> {counterValue[1](++counterValue[0])}}>
    Increament Context
    </button>
        </div>
    )
} 
export default Child;