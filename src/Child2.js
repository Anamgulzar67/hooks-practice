import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch] =  useReducer(CounterReducer, 1);

    return(
        <div >
            <h1 className='text-2xl'>This is second child using Counter Reducer</h1>

            <h4 className='py-2 text-lg'>Value of reducer state is:<span className='text-white'> {state}</span></h4>
            <button className='py-2 border-2 rounded  border-black  bg-white px-4' onClick={()=>dispatch({ type: 'INCREMENT' })}> Press to counter reducer</button>
        </div>
    )
}
export default Child2;