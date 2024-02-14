import {Link} from "react-router-dom";
import Logo from "./assets/tempLogo.png"

const Nav = () => {

    return(
        <nav className="nav">
          <ul className="brightBg neuT"> 
            <li id="navLogo"><Link to="/"><img src={Logo} /></Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li id="donateNav"><Link to="/donate">Donate</Link></li>
          </ul>
          </nav>)
}

export default Nav;