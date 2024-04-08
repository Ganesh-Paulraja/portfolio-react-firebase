import React from 'react'
import './Skills.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css'; 
// imgs
import htmlIcon from '../../images/icons/htmlImg.png'
import cssIcon from '../../images/icons/css.png'
import sassIcon from '../../images/icons/scss.png'
import jsIcon from '../../images/icons/js.png'
import reactIcon from '../../images/icons/react.png'
import reduxIcon from '../../images/icons/redux.png'
import tailwindIcon from '../../images/icons/tailwind.png'
import nodeIcon from '../../images/icons/nodejs.png'
import expressIcon from '../../images/icons/express.png'
import mongodbIcon from '../../images/icons/mongodb.png'
// import rightArrow from '../../images/arrows/rightarrow.svg'
// import leftArrow from '../../images/arrows/leftarrow.svg'

export default function Skills() {
  const breakpoints = {
    50: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 5,
    },
  };
  return (
    
    <div className='skills-wrap'>
      <h1>My Expertise</h1>
      <div className="gg-card-wrap">
      <Swiper
        spaceBetween={0}
        slidesPerView={6}
        modules={[Navigation]}
        breakpoints={breakpoints}
        direction='horizontal' 
        navigation={{
          nextEl: `.swiper-button-next-${123}`,
          prevEl: `.swiper-button-prev-${123}`,
        }}
      >
        <SwiperSlide>
      <div className="gg-card-box">
          <div className="gg-img-wrap">
<img src={reactIcon} alt="html" />
<img src={reduxIcon} alt="css" />
          </div>
          <div className="gg-sk-head">
React, Redux
          </div>
          <div className="gg-sk-text">
In React and Redux, I thrive, seamlessly integrating state management into dynamic user interfaces, ensuring robust and scalable front-end solutions.
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="gg-card-box">
          <div className="gg-img-wrap">
<img src={htmlIcon} alt="html" />
<img src={cssIcon} alt="css" />
<img src={sassIcon} alt="scss" />
          </div>
          <div className="gg-sk-head">
HTML, CSS, SCSS
          </div>
          <div className="gg-sk-text">
          I excel in HTML, CSS, and SCSS, proficiently crafting polished and dynamic web layouts with precision and style.
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="gg-card-box">
          <div className="gg-img-wrap">
<img src={jsIcon} alt="java script" />
          </div>
          <div className="gg-sk-head">
Java Script
          </div>
          <div className="gg-sk-text">
          In JavaScript, I shine, leveraging its flexibility and power to create dynamic and interactive web applications with efficiency and elegance.
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="gg-card-box">
          <div className="gg-img-wrap">
<img src={tailwindIcon} alt="tailwind" />
          </div>
          <div className="gg-sk-head">
Tailwind
          </div>
          <div className="gg-sk-text">
In Tailwind, I excel, harnessing its utility-first approach to rapidly style web interfaces with efficiency and consistency, enhancing development speed and productivity.
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="gg-card-box">
          <div className="gg-img-wrap">
<img src={nodeIcon} alt="node js" />
<img src={expressIcon} alt="express js" />
          </div>
          <div className="gg-sk-head">
Node js, Express js
          </div>
          <div className="gg-sk-text">

          In Node.js and Express.js, I excel, leveraging their powerful combination to build fast, scalable, and efficient server-side applications, handling HTTP requests with ease and flexibility.
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="gg-card-box">
          <div className="gg-img-wrap">
<img src={mongodbIcon} alt="MongoDB" />
          </div>
          <div className="gg-sk-head">
          MongoDB
          </div>
          <div className="gg-sk-text">

          In MongoDB, I excel, utilizing its flexible NoSQL database to efficiently store and manage data, enabling seamless integration with modern web applications for robust and scalable solutions.
          </div>
        </div>
        </SwiperSlide>
        </Swiper>
        <div className={`swiper-button-next swiper-button-next-${123}`}>
        {/* <img src={rightArrow} alt='next' /> */}
      </div>
      <div className={`swiper-button-prev swiper-button-prev-${123}`}>
        {/* <img src={leftArrow} alt='previous' /> */}
      </div>
      </div>
    </div>
  )
}
