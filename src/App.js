import React, { Component } from 'react'
import Thumbnails from './images/images'
import Main from './components/Main'
import './App.css'

const pages = [
  {
    key: 0,
    title: 'art',
    image: Thumbnails.ArtThumb
  },
  {
    key: 1,
    title: 'games',
    image: Thumbnails.GamesThumb
  },
  {
    key: 2,
    title: 'videos',
    image: Thumbnails.VideoThumb
  },
  {
    key: 3,
    title: 'work',
    image: Thumbnails.WorkThumb,
    url: 'https://www.linkedin.com/in/robert-apelian-9178494b'
  },
]

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#343a34', color: 'rgb(255,255,255)', height: '100%'}}>
        {/*<div style={{display: 'flex', justifyContent: 'center', fontSize: 64, marginBottom: '16px'}}><i>rob apelian</i> </div>*/}
        <Main pages={pages}/>
      </div>
    )
  }
}

export default App