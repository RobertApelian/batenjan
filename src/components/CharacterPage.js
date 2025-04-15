import React from 'react'

const CharacterPage = ({name, subtitle, age, title, picture, quote}) => {
	return <div style={{width: '80vw', display: 'flex', alignItems: 'center', flexDirection: 'column', fontFamily: 'EB Garamond', justifyContent: 'center'}}>
		{picture && <div style={{backgroundColor: 'rgba(255,255,255,.2)', width: '100%', display: 'flex', justifyContent: 'center'}}>
            <img alt={name} style={{height: '60vh'}} src={picture}/>
        </div>}
        {!picture && <div id="spacer" style={{height: '20vh'}}></div>}
        {name && <div style={{fontSize: '4em', marginBottom: '15px'}}>{name}</div>}
        {subtitle && <div>{subtitle}</div>}
        {age && <div>{age}</div>}
        {quote && quote.map(line => 
            <div style={{fontFamily: 'EB Garamond', width: '70%', fontSize: '1.5em', textAlign: 'center', color: '#d3ab6a', margin:'15px'}}>
                {line}
            </div>)}
    </div>
}

export default CharacterPage;