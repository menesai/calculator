import React, {Component} from 'react';
import './Header.css'


class Header extends Component {
    
    render(){
        console.log(this.props.equation)
        return(
        <div className='calcHeader'>
            <p>{this.props.equation}</p>
            {/* <p>Displays whats being summed</p> */}
        </div>
    )
    }
}

export default Header;