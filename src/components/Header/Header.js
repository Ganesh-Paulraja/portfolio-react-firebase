import React, {useState} from 'react'
import logIcon from '../../images/logo.png'
import menuIcon from '../../images/hand-menu.svg'
import closeIcon from '../../images/close-icon.svg'
import { Link } from "react-router-dom";
import './Header.scss'

export default function Header() {
  const [openMenu, setopenMenu] = useState(false)

  const handleMenuClick = () => {
    setopenMenu(true)
    console.log(openMenu);
  }
  const handleCloseClick = () => {
    setopenMenu(false)
    console.log(openMenu);
  }
  return (
    <div className='header-wrap'>
      <div className="logo-wrap">
      <Link to="/"> <img src={logIcon} alt="developer" /></Link>
       
      </div>
      <div className={openMenu ? 'gg-overlay show-overlay': 'gg-overlay'} onClick={handleCloseClick}>

      </div>
      <div className={openMenu ? 'nav-wrap open-wrap' : 'nav-wrap'}>
        <div className="close-icon" onClick={handleCloseClick}>
          <img src={closeIcon} alt="close" />
        </div>
      <ul className='nav-option' >
        <li>
          <Link to="/" onClick={handleCloseClick}>Home</Link>
        </li>
        <li>
        <Link to="/projects"  onClick={handleCloseClick}>Projects</Link>
        </li>
        <li>
        <Link to="/about" onClick={handleCloseClick}>About me</Link>
        </li>
        
      </ul>
      <div className="cta-wrap" onClick={handleCloseClick}>
        <a href="#footer">
          Contact Me
        </a>
        </div>
      </div>
      <div className="hand-burder" onClick={handleMenuClick}>
<img src={menuIcon} alt="menu" />
        </div>

    </div>
  )
}
