import react, { useState } from 'react';

export default function CounterHook ({ initialCount }){
    let [count, setCount] = useState( initialCount );
    return (
        <>
            <p>Counter Hook</p>
            <div className='counter'>
                <button className='btn' onClick={() =>setCount(prevCount => prevCount -1)}>-</button>
                <span className='result'>{count}</span>
                <button className='btn'  onClick={() =>setCount(prevCount => prevCount +1)}>+</button>
            </div>
        </>);
}