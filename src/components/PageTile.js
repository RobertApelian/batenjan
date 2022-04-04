import React, { Component } from 'react'

class PageTile extends Component {
  render() {
    switch(this.props.page.type){
      case 'main':
        return  (
              <div className='page-tile-main' key={this.props.page.title}>
                <img
                  className='page-tile-image-main'
                  src={this.props.page.image}
                  width='100%' />
              </div>
            );
        break;

      case 'main-text':
        return  (
              <div className='page-tile-main' key={this.props.page.title}>
                <img
                  className='page-tile-image-main'
                  src={this.props.page.image}
                  width='100%' />
                <i className='page-tile-description'> {this.props.page.text} </i>
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