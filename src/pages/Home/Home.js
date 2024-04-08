import React from 'react'
import Banner from '../../components/Banner/Banner'
import Skills from '../../components/Skills/Skills'
import ButtonWrap from '../../components/ButtonWrap/ButtonWrap'
import './Home.scss'


export default function Home() {
  return (
    <div className='home-wrap'>
      <Banner/>
      <Skills/>
      <ButtonWrap/>
    </div>
  )
}
