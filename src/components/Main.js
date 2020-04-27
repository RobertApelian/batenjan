import React, { Component } from 'react'
import PageTile from './PageTile'

export default class Main extends Component {
	render() {
  		return <div style={{display: 'flex', width: '100vw', flexWrap: 'wrap'}}>
    	{
      		this.props.pages.map(page => <PageTile page={page}/>)
    	}
  		</div>
	}
}
