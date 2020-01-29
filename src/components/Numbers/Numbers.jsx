import React, {Component} from 'react';
import NumHeader from '../NumHeader/NumHeader';
import NumberList from '../NumberList/NumberList';
import './Numbers.css';

class Numbers extends Component {

    render(){
       const {handleChange} =this.props;
        return(
            <div className='calcNumbers'>
              <NumHeader handleChange={handleChange}/>
              <NumberList handleChange={handleChange}/>
            </div>
        )
    }
}

export default Numbers;