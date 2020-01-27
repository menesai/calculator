import React, {Component} from 'react'
import './NumberList.css'

class NumberList extends Component {

    render(){
        return (
            <div>
                <div >
                    <button className='numberListBtn'>7</button>
                    <button className='numberListBtn'>8</button>
                    <button className='numberListBtn'>9</button>
                </div>
                <div>
                    <button className='numberListBtn'>4</button>
                    <button className='numberListBtn'>5</button>
                    <button className='numberListBtn'>6</button>
                </div>
                <div>
                    <button className='numberListBtn'>1</button>
                    <button className='numberListBtn'>2</button>
                    <button className='numberListBtn'>3</button>
                </div>
                <div>
                    <button className='footerBtn-1'>0</button>
                    <button className='footerBtn-2'>.</button>
                </div>
            </div>
        )
    }
}

export default NumberList;