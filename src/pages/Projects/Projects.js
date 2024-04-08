import React from 'react'
import './Projects.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css'; 
import { ProjectsList, miniProjectList  } from '../../utility/data';
import githubIcon from '../../images/social/bi_github.svg'

export default function Projects() {
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
  };
  return (
    <div className='project-wrap'>
      <div className="gg-head">
        Projects
      </div>
      <div className="gg-card-wrap">
      <Swiper
        spaceBetween={0}
        slidesPerView={6}
        modules={[Navigation]}
        breakpoints={breakpoints}
        direction='horizontal' 
        navigation={{
          nextEl: `.swiper-button-next-${124}`,
          prevEl: `.swiper-button-prev-${124}`,
        }}
      >
        {
          ProjectsList.map((val) => {
            return (
              <SwiperSlide>
      <div className="gg-card-box">
          <div className="gg-img-wrap">
            <a href={val.url} target='_blank' rel="noreferrer">
<img src={val.img} alt={val.tittle} />
</a>
          </div>
          <div className="gg-sk-head">
          <a href={val.url} target='_blank' rel="noreferrer">
{val.tittle}
</a>
          </div>
          <div className="gg-sk-text">
{val.text}
          </div>
          <div className="gg-git-icon">
            <a href={val.github} target='_blank' rel="noreferrer">
            <img src={githubIcon} alt="github" />
            </a>
          </div>
        </div>
        </SwiperSlide>

            )
          })
        }
        </Swiper>
        <div className={`swiper-button-next swiper-button-next-${124}`}>
      </div>
      <div className={`swiper-button-prev swiper-button-prev-${124}`}>
      </div>
      </div>
      <div className="gg-head">
        Mini Projects
      </div>
      <div className="gg-card-wrap">
      <Swiper
        spaceBetween={0}
        slidesPerView={6}
        modules={[Navigation]}
        breakpoints={breakpoints}
        direction='horizontal' 
        navigation={{
          nextEl: `.swiper-button-next-${125}`,
          prevEl: `.swiper-button-prev-${125}`,
        }}
      >
        {
          miniProjectList.map((val) => {
            return (
              <SwiperSlide>
      <div className="gg-card-box">
          <div className="gg-img-wrap">
            <a href={val.url} target='_blank' rel="noreferrer">
<img src={val.img} alt={val.tittle} />
</a>
          </div>
          <div className="gg-sk-head">
          <a href={val.url} target='_blank' rel="noreferrer">
{val.tittle}
</a>
          </div>
          <div className="gg-sk-text">
{val.text}
          </div>
          <div className="gg-git-icon">
            <a href={val.github} target='_blank' rel="noreferrer">
            <img src={githubIcon} alt="github" />
            </a>
          </div>
        </div>
        </SwiperSlide>

            )
          })
        }
        </Swiper>
        <div className={`swiper-button-next swiper-button-next-${125}`}>
      </div>
      <div className={`swiper-button-prev swiper-button-prev-${125}`}>
      </div>
      </div>
    </div>
  )
}
