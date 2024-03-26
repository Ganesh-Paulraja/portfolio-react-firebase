import React from 'react'
import logIcon from '../../images/logo.png'
import './Header.scss'

export default function () {
  return (
    <div className='header-wrap'>
      <div className="logo-wrap">
        <img src={logIcon} alt="developer" />
      </div>
      <ul className='nav-option'>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About me</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>
      <div className="cta-wrap">
        <a href="">
          Contact Me
        </a>
      </div>
    </div>
  )
}
