import React from 'react'
import CoverArt  from '../images/covermain.png'
import TitleVector  from '../images/titleVector'

const Cover = () => {
	return <div style={{width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
		<div className='titleContainer'>
			<TitleVector />
		</div>
		<img src={CoverArt} style={{filter: 'drop-shadow(rgba(0, 0, 0, .5) 10px 5px)', width: '100%', margin: '-9% 0 0 0'}}/>
	</div>
}

export default Cover;