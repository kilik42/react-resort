import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

/**
 * ComponentName
 */
export class Navbar extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
     isOpen: false
  }
  handleToggle= ()=>{
    this.setState({isOpen:!this.state.isOpen})
  }
  render() {
    return (
    <nav className="navbar">
    <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="beach resort"/>

            </Link>
          </div>
    </div>

    </nav>
    );
  }
}



export default Navbar;
