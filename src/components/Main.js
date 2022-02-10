import React, { Component } from 'react'
import PageTile from './PageTile'
import '../styles/vulfMono.css';

const Main = (props) => {
	return <div>

		<div style={{display: 'flex', width: '100vw', flexWrap: 'wrap'}}>
		{
	  	props.pages.map(page => <PageTile page={page}/>)
		}
		</div>
	</div>
}

export default Main;