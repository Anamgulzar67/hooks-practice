import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {
    
    let counterValue = useContext(counterContext)
    
    return (
        <div>
            <h1 className='text-2xl'>This is first child using Counter Context</h1>
            <h4 className='py-2 text-lg'>Counter value is: <span className='text-white'> {counterValue[0]}</span> </h4>

            <button className='py-2 border-2 rounded  border-black  bg-white px-4' onClick={()=> {counterValue[1](++counterValue[0])}}>
                 Press to counter context
            </button>
        </div>
    )
}

export default Child;