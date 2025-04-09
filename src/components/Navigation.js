import React from 'react'
import Corner from '../images/corner.png'

const Navigation = ({page, isLeft, setIndex}) => {
    const pagePreview = <div style={{
        position: 'absolute',
        height: '100vh',
        right: isLeft && '150px',
        left: !isLeft && '150px',
        width: '500px',
        opacity: .5}}>
        {page.component}
    </div>;

	return <div style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: isLeft ? 'flex-end' : 'flex-start',
        position: 'relative',
        backgroundColor: 'rgba(0,0,0,.5)',
        cursor: 'pointer',
        overflow: 'hidden'
    }}
            
    onClick={() => setIndex(page.id)}> 
        {isLeft && pagePreview}
        <div style={{
            backgroundColor: '#d3ab6a',
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRight: '3px solid #292e7b',
            borderLeft: '3px solid #292e7b',
            zIndex: 1,
            maxWidth: '150px',
            userSelect: 'none'}}
        >
            <img alt='' src={Corner} className='cornerDecoration' style={{transform: isLeft ? 'scale(-1,1)' : 'scale(1,1)'}}/>
            <div style={{
                color: '#292e7b',
                writingMode: isLeft ? 'sideways-lr' : 'sideways-rl',
                fontFamily: 'EB Garamond',
                fontSize: '3em'}}>
                    {page.title}
            </div>
            <img alt='' src={Corner} className='cornerDecoration' style={{transform: isLeft ? 'scale(-1,-1)' : 'scale(1,-1)'}}/>
        </div>
        {!isLeft && pagePreview}     
    </div>
}

export default Navigation;