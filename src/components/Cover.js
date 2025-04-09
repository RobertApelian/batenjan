import React from 'react'
import CoverArt  from '../images/covermain.png'
import TitleVector  from '../images/titleVector'

const Cover = () => {
	return <div className='coverContainer'>
		<div className='titleContainer'>
			<TitleVector />
		</div>
		<img alt='Fustuk book cover' src={CoverArt} style={{filter: 'drop-shadow(rgba(0, 0, 0, .5) 5px 10px)', height: '85%', margin: '-5% 0 0 0'}}/>
	</div>
}

export default Cover;