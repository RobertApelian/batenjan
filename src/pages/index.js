import React from 'react'
import Thumbnails from '../images/images'
import Main from '../components/Main'
import Scroller from '../components/Scroller'
import '../styles/App.css'

const pages = [
  {
    key: 0,
    title: 'fustuk',
    image: Thumbnails.Fustuk,
    type: 'main'
  },
  {
    key: 1,
    title: 'fustuk-description',
    type: 'main-text',
    image: Thumbnails.FustukBackground,
    text: <p><b><i>Fustuk</i></b> is an upcoming graphic novel written and illustrated by me about family, food, and cultural identity in a diaspora.<br/>It follows the youngest of three dysfunctional siblings in a family of chefs who strike a deal with a Djinn to save their dying mother — but only if they can step out of the shadow of their legendary father and cook a dish to rival his.<br/><br/><i>Fustuk</i> is being published by the fine folks at Penguin Random House for release in 2025!<br/><br/><br/>(sample pages shown behind do not represent final art)</p>
  },
  {
    key: 2,
    title: 'about rob',
    image: Thumbnails.FustukSeperator,
    type: 'seperator'
  },
  {
    key: 3,
    title: 'instagram',
    image: Thumbnails.ArtThumb,
    url: 'https://www.instagram.com/robertapelian/',
    type: 'thumb'
  },
  {
    key: 4,
    title: 'twitter',
    image: Thumbnails.TwitterThumb,
    url: 'https://twitter.com/rob_a_pelican',
    type: 'thumb'
  },
  {
    key: 5,
    title: 'shop',
    image: Thumbnails.ShopThumb,
    url:  'https://redbubble.com/people/robapelian/shop',
    type: 'thumb'
  },
  {
    key: 6,
    title: 'commissions',
    image: Thumbnails.WorkThumb,
    url: 'https://ko-fi.com/robertapelian/commissions',
    type: 'thumb'
  }
  
]

const App = (props) => {
  return (
    <div style={{backgroundColor: '#343a34', color: 'rgb(255,255,255)', height: '100%', fontFamily: 'Vulf Mono'}}>
      <Main pages={pages}/>
      <Scroller />
    </div>
  )
}

export default App