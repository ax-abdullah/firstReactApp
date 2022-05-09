import React, { Component } from 'react';
import { ThemeContext } from './App';
export default class Counter extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            count: props.initialCount
        }
    }
    render() {
        return (
        <ThemeContext.Consumer>
            {style => (
                <>
                    <p>Counter</p>
                    <div className='counter'>
                        <button style={style}  className='btn' onClick={() => this.changeAmount(-1)}>-</button>
                        <span className='result'>{this.state.count}</span>
                        <button className='btn' onClick={() => this.changeAmount(1)}>+</button>
                    </div>
                </>
            )}
        </ThemeContext.Consumer>

        );
    }
    changeAmount(amount){
        this.setState(prevState => {
            return {count: prevState.count + amount}
        })

    }
}
