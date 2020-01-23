import React, { Component } from 'react'
import Header from '../Header/Header'
import Operators from '../Operators/Operators';
import Numbers from '../Numbers/Numbers';
import './Calculator.css';
// import './CartDropDown.scss'

export class Calculator extends Component {
    render() {
        // console.log('hello')
        return (
            <div className='calcBody'>
                <Header/>
                <div className='calcSection'>
                    <div className='sectionOne'>
                        <Numbers/>
                    </div>
                    <div className='sectionTwo'>
                        <Operators/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;
