import React, { Component } from 'react'
import PageTile from './PageTile'

const Main = (props) => {
	return <div style={{display: 'flex', width: '100vw', flexWrap: 'wrap'}}>
	{
  		props.pages.map(page => <PageTile page={page}/>)
	}
	</div>
}

export default Main;