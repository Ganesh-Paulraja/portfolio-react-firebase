import React from 'react'
import './About.scss'
import bannerImage from '../../images/banner.png'
import Skills from '../../components/Skills/Skills'
import resume from '../../images/Fronted-resume.pdf'

export default function Banner() {
  return (
    <div>
    <div className="about-wrap">
      <div className="gg-left">
<img src={bannerImage} alt="developer" />
      </div>
      <div className="gg-right">
 <h2>Hey, I'm Ganesh</h2>
 <h1>Frotend <br /> <span> Developer</span></h1>
 <p>Currently working remotely for ConvertCart, a software company based in Bangalore.My native is Kanyakumari. My job involves using tools like React.js and jQuery to make websites better. I'm skilled in HTML, CSS, and JavaScript, and I also know back-end technologies like Node.js and MongoDB. I enjoy creating special features to help websites attract more users and improve conversion rates. Outside of work, I like to design on Figma.</p>
 <div className="gg-btn-wrap">
 <a href={resume} rel="noreferrer" target='_blank' className='gg-get-touch'>
  Dowload Resume
 </a>
 </div>

      </div>
    </div>
     <Skills/>
     </div>
  )
}
