import React, { Component } from 'react'
import '../styles/vulfMono.css';

class Scroller extends Component {
	state = {
		scrolled: false
	};

	componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount = () => {
	  window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll = () => {
		if (this.state.scrolled === false && window.scrollY !== 0) {
			this.setState({scrolled: true});
		} else if (window.scrollY === 0) {
			this.setState({scrolled: false});
		}
	};

	scrollDown = () => {
		window.scrollBy({
			left: 0, 
			top: 2*window.innerHeight,
			behavior: 'smooth'
		});
	};

	scrollUp = () => {
		window.scrollBy({
			left: 0, 
			top: -(2*window.innerHeight),
			behavior: 'smooth'
		});
	};

  render() {
		return this.state.scrolled ? (
			<div onClick={this.scrollUp} className='scroller'>▲ back to top ▲</div>
		) : (
			<div onClick={this.scrollDown} className='scroller'>▼ socials, commissions and more ▼</div>
		)
	}
};

export default Scroller;