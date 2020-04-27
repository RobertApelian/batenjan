import React, { Component } from 'react'
import PageTile from './PageTile'

export default class Main extends Component {
	render() {
		switch(window.location.pathname) {
			case '/videos': 
				return <div> peepee </div>
			default:
		  		return <div style={{display: 'flex', width: '100vw', flexWrap: 'wrap'}}>
		    	{
		      		this.props.pages.map(page => <PageTile page={page}/>)
		    	}
		  		</div>
		}
	}
}
