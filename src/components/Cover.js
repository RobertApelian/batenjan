import React from 'react'
import CoverArt  from '../images/covermain.png'
import TitleVector  from '../images/titleVector'

const Cover = () => {
	return <div className='coverContainer'>
		<div className='titleContainer'>
			<TitleVector />
			<div className='comingSoon'>Coming January 2026</div>
			<a target="_blank" style={{textDecoration: 'none'}} href='https://www.penguinrandomhouse.com/books/719603/fustuk-a-graphic-novel-by-robert-mgrdich-apelian-illustrated-by-robert-mgrdich-apelian/'>
				<div className='preorder'>
					{'Preorder Now'}
				</div>
			</a>
		</div>
		<img alt='Fustuk book cover' src={CoverArt} className='coverImage'/>
		<div className='pageIndicator'>
			{'< Swipe for more >'}
        </div>
	</div>
}

export default Cover;