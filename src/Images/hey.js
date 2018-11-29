import React from 'react';
import logo from './hey.jpg'; 

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />
}

export default Header;