import React from 'react'
import './Banner.scss'
import bannerImage from '../../images/banner.png'

export default function Banner() {
  return (
    <div className="gg-banner-wrap">
      <div className="gg-left">
<img src={bannerImage} alt="developer" />
      </div>
      <div className="gg-right">
 <h2>Hey, I'm Ganesh</h2>
 <h1>Frotend <br /> <span> Developer</span></h1>
 <p>As a developer skilled in React.js, I specialize in crafting dynamic user interfaces that seamlessly integrate with MongoDB and Node.js, enabling the creation of powerful and scalable full-stack web applications.</p>
 <div className="gg-btn-wrap">
 <a href="#footer" className='gg-get-touch'>
  Get in Touch
 </a>
 </div>
 
      </div>
    </div>
  )
}
