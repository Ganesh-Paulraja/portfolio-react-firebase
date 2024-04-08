import React from 'react'
import './Footer.scss'
// images
import githubImage from '../../images/social/bi_github.svg'
import linkedImage from '../../images/social/mdi_linkedin.svg'
import instaImage from '../../images/social/teenyicons_instagram-solid.svg'
import phoneImage from '../../images/social/ic_baseline-phone.png'
import mailImage from '../../images/social/ic_baseline-email.png'


export default function Footer() {
  return (
    <div className='footer-wrap' id='footer'>
      <div className="phone">
      <span className="icon">
<img src={phoneImage} alt="phone" />
      </span>
      <a href="tel:8056611391">
8056611391
      </a>
      </div>
      <div className="mail">
      <span className="icon">
<img src={mailImage} alt="mail" />
      </span>
      <a href="mailto:ganeshpaulraja@gmail.com">
ganeshpaulraja@gmail.com
      </a>
      </div>
      <div className="social-wrap">
        <a href="https://github.com/Ganesh-Paulraja">
          <img src={githubImage} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/ganesh-p-4aa657215/">
          <img src={linkedImage} alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/developer_ganesh/">
          <img src={instaImage} alt="instagram" />
        </a>
      </div>
    </div>
  )
}
