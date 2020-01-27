import React, {Component} from 'react';
import './Operators.css'

class Operators extends Component{
    render(){
        return (
            <div className='calcOperators'>
               <button className='btnOp'>/</button>
               <button className='btnOp'>x</button>
               <button className='btnOp'>-</button>
               <button className='btnOp'>+</button>
               <button className='btnOp'>=</button>
            </div>
        )
    }
}

export default Operators;