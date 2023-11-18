import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App() {
  let countState = useState(1) //[count, setCount]

  return (
    <CounterContext.Provider value={countState}>
      <h1 className=' shadow-2xl shadow-white text-3xl text-center mt-20  mx-auto w-3/12'>Hook's concept</h1>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;