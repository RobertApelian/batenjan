import React, { Component } from 'react'
import Thumbnails from '../images/images'

class PageTile extends Component {
  render() {
    switch(this.props.page.type){
      case 'main':
        return  (
              <div className='page-tile-main' style={{backgroundImage: `url(${this.props.page.image})`}} key={this.props.page.title}>
              </div>
            );
        break;

      case 'main-text':
        return  (
              <div className='page-tile-main' style={{backgroundImage: `url(${this.props.page.image})`}} key={this.props.page.title}>
                <div className='page-tile-description'> {this.props.page.text} </div>
              </div>
            );
        break;

      case 'seperator':
        return  (
              <div className='page-tile-seperator' style={{backgroundImage: `url(${this.props.page.image})`}} key={this.props.page.title} >
                <i className='page-seperator-title'> {this.props.page.title} </i>
              </div>
            );
        break;

      default:
        return (
           <div className='page-tile' key={this.props.page.title} onClick={() => window.location = this.props.page.url || '/' + this.props.page.title}>
            <img
              className='page-tile-image'
              src={this.props.page.image}
              width='100%' />
            <i className='page-tile-title'> {this.props.page.title} </i>
          </div>
        );
    }      
  }
}

export default PageTile