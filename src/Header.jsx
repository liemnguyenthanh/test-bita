/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import headerImg from './img/logo-bitA.png';

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onToggleSidebar } = props
  return (
    <div className='header'>
      <img src={headerImg} alt="Hello" />
      <i className="fas fa-bars" onClick={()=>onToggleSidebar()}></i>
    </div>
  )
}

export default Header