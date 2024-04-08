import React from 'react'
import {Link} from 'react-router-dom'
import './ButtonWrap.scss'

export default function ButtonWrap() {
  return (
    <div className='btn-wrap'>
      <Link to='/projects' className='project-btn'>
        Projects
      </Link>
      <Link to='/about' className='about-btn'>
        About Me
      </Link>
    </div>
  )
}
