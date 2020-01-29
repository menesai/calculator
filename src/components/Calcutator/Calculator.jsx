import React, { Component } from 'react'
import Header from '../Header/Header'
import Operators from '../Operators/Operators';
import Numbers from '../Numbers/Numbers';
import './Calculator.css';
// import './CartDropDown.scss'

export class Calculator extends Component {
    constructor(){
        super();
        
        this.state ={
            equation: '',
            display: 0
        }
    }

    handleChange = (e)=>{
        // console.log(value)
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        // console.log('hello')
        return (
            <div className='calcBody'>
                <Header equation={this.state.equation} handleChange={this.handleChange} display={this.state.display}/>
                <div className='calcSection'>
                    <div className='sectionOne'>
                        <Numbers handleChange={this.handleChange}/>
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
