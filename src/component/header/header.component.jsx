import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='options' to='/shop'>SHOP</Link>
      <Link className='options' to='/shop'>CONTACT</Link>
      {
        currentUser ? 
        // true
        (<div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>)
        :
        // false
        (<Link className='option' to='/signin' >SIGN IN</Link>)
      }
    </div>
  </div>
)

export default Header;