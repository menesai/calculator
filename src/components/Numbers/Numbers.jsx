import React, {Component} from 'react';
import NumHeader from '../NumHeader/NumHeader';
import NumberList from '../NumberList/NumberList';
import './Numbers.css';

class Numbers extends Component {

    render(){
        return(
            <div className='calcNumbers'>
              <NumHeader/>
              <NumberList/>
            </div>
        )
    }
}

export default Numbers;