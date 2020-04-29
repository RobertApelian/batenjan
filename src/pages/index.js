import React, { Component } from 'react'
import Thumbnails from '../images/images'
import Main from '../components/Main'
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
    title: 'shop',
    image: Thumbnails.ShopThumb,
    url:  'https://redbubble.com/people/robapelian/shop'
  },
  {
    key: 2,
    title: 'videos',
    image: Thumbnails.VideoThumb,
    url: 'https://vimeo.com/user6798736'
  },
  {
    key: 3,
    title: 'work',
    image: Thumbnails.WorkThumb,
    url: 'https://www.linkedin.com/in/robert-apelian-9178494b'
  },
]

const App = (props) => {
  return (
    <div style={{backgroundColor: '#343a34', color: 'rgb(255,255,255)', height: '100%', fontFamily: 'Vulf Mono'}}>
      <Main pages={pages}/>
    </div>
  )
}

export default App