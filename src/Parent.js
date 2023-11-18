import React from 'react';
import Child from './Child';
import Child2 from './Child2';

const Parent = (props) => {
    return (
        <div className="w-3/5 my-20 py-10 px-10  bg-zinc-400 shadow-2xl  shadow-white items-center mx-auto text-center ">
            <Child/>
            <Child2/>
        </div>
    )
}

export default Parent;