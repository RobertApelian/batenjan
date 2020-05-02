import React, { Component } from 'react'
import Thumbnails from '../images/images'
import Main from '../components/Main'
import Footer from '../components/Footer'
import '../styles/App.css'

const pages = [
  {
    key: 0,
    title: 'art',
    image: Thumbnails.ArtThumb,
    url: 'https://www.instagram.com/robertapelian/'
  },
  {
    key: 1,
    title: 'commissions',
    image: Thumbnails.WorkThumb,
    url: '/commissions'
  },
  {
    key: 2,
    title: 'shop',
    image: Thumbnails.ShopThumb,
    url:  'https://redbubble.com/people/robapelian/shop'
  },
  {
    key: 3,
    title: 'videos',
    image: Thumbnails.VideoThumb,
    url: 'https://vimeo.com/user6798736'
  }
]

const App = (props) => {
  return (
    <div style={{backgroundColor: '#343a34', color: 'rgb(255,255,255)', height: '100%', fontFamily: 'Vulf Mono'}}>
      <Main pages={pages}/>
      <Footer />
    </div>
  )
}

export default App