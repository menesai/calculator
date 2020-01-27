import React, {Component} from 'react';
import './NumHeader.css';


class NumHeader extends Component {

    render(){
        return (
            <div className='numHeader'>
                <button className='numHeaderItems'>C</button>
                <button className='numHeaderItems'>+/-</button>
                <button className='numHeaderItems'>%</button>
            </div>
        )
    }
}

export default NumHeader;