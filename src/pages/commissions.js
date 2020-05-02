import React, { Component } from 'react'
import Thumbnails from '../images/commissionImages'
import Main from '../components/Main'
import '../styles/App.css'

const imageWidth = '40%'

const App = (props) => {
  return (
    <div style={{backgroundColor: '#343a34', color: 'rgb(255,255,255)', fontFamily: 'Vulf Mono', fontStyle: 'italic'}}>
      <a style={{position: 'absolute', top:5, left: 5, fontSize: 20}} href="/">{'< back'}</a>
      <div style={{fontSize: 40, textAlign: 'center', height: 200}}>
        <div className='rainbow-time'>commissions are open!</div>
        <a href="mailto:robertmapelian@gmail.com">hit me up</a>
        <div style={{fontSize:20,  margin: '10px 100px'}}> 
          i've done a beer label for <a href='https://www.aeronautbrewing.com/'>aeronaut brewing</a>, newspaper comics for the <a href='https://armenianweekly.com/'>armenian weekly</a>, and hopefully something for you. prices listed below are for individuals
        </div>
      </div>
      <div className='scroll-section'>
        <img
          src={Thumbnails.BasicInk}
          width={imageWidth} 
          style={{marginBottom: 40}}/>
        <img
          src={Thumbnails.BasicWatercolor}
          width={imageWidth}
          style={{marginBottom: 40}} />
        <img
          src={Thumbnails.FullInk}
          width={imageWidth} />
        <img
          src={Thumbnails.FullWatercolor}
          width={imageWidth} />
      </div>
    </div>
  )
}

export default App