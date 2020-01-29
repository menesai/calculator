import React, {Component} from 'react'
import './NumberList.css'

class NumberList extends Component {


    render(){
        console.log(this.props.handleChange)
        return (
            <div>
                <div >
                    <button onClick={this.props.handleChange} className='numberListBtn' name='equation' value={7}>7</button>
                    <button onClick={this.props.handleChange} className='numberListBtn' name='equation' value={8}>8</button>
                    <button className='numberListBtn' value='9'>9</button>
                </div>
                <div>
                    <button onClick={this.props.handleChange} className='numberListBtn' name='4'>4</button>
                    <button onClick={this.props.handleChange} className='numberListBtn' value='5'>5</button>
                    <button onClick={this.props.handleChange} className='numberListBtn' value='6'>6</button>
                </div>
                <div>
                    <button onClick={this.props.handleChange} className='numberListBtn' value='1'>1</button>
                    <button onClick={this.props.handleChange} className='numberListBtn' value='2'>2</button>
                    <button onClick={this.props.handleChange} className='numberListBtn' value='3'>3</button>
                </div>
                <div>
                    <button className='footerBtn-1' value='0'>0</button>
                    <button className='footerBtn-2' value='.'>.</button>
                </div>
            </div>
        )
    }
}

export default NumberList;