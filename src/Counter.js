import React, { Component } from 'react';

export default class Counter extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            count: props.initialCount
        }
    }
    render() {
        return (
        <>
            <p>Counter</p>
            <div className='counter'>
                <button className='btn' onClick={() => this.changeAmount(-1)}>-</button>
                <span className='result'>{this.state.count}</span>
                <button className='btn' onClick={() => this.changeAmount(1)}>+</button>
            </div>
        </>

        );
    }
    changeAmount(amount){
        this.setState(prevState => {
            return {count: prevState.count + amount}
        })

    }
}
