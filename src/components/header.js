import { Link } from "gatsby"
import React, { useEffect} from "react";
import Logo from '../images/Logo.svg'


const Header = () => { 

  return(
  <header className="header">
    <Link  to="/" className="left">
     <img id ="logo" src={Logo} alt=""/>
    </Link>
    
  </header>
)
}
export default Header