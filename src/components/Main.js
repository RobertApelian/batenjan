import React, { Component } from 'react'
import PageTile from './PageTile'
import '../styles/vulfMono.css';
import '../styles/ebGaramond.css';

const Main = (props) => {
	return <div style={{display: 'flex', width: '100%', flexWrap: 'wrap'}}>
	{
  		props.pages.map(page => <PageTile page={page}/>)
	}
	</div>
}

export default Main;