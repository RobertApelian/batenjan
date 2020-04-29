import React, { Component } from 'react'

class PageTile extends Component {
  render() {
    return (
      <div className='page-tile' key={this.props.page.title} onClick={() => window.location = this.props.page.url || '/' + this.props.page.title}>
        <img
        	className='page-tile-image'
        	src={this.props.page.image}
        	width='100%' />
        <i className='page-tile-title'> {this.props.page.title} </i>
      </div>
    )
  }
}

export default PageTile