import { useState, useContext } from 'react';
import { ThemeContext } from './App';


export default function CounterHook ({ initialCount }){
    let [count, setCount] = useState( initialCount );
    const theme = useContext(ThemeContext);
    return (
        <>
            <p>Counter Hook</p>
            <div className='counter'>
                <button style={theme} className= 'btn'   onClick={() =>setCount(prevCount => prevCount -1)}>-</button>
                <span className='result'>{count}</span>
                <button className='btn'  onClick={() =>setCount(prevCount => prevCount +1)}>+</button>
            </div>
        </>);
}