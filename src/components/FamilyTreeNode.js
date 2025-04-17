import React from 'react'

const FamilyTreeNode = ({currentChar, char, onClick, isMobile}) => {
    const isSelected = currentChar === char.key;
    const selectedStyle = isSelected ? {
        height: '100%',
        width: '100%',
        transition: 'all 300ms',
        display: 'flex',
        justifyContent: 'center'
    } :
    {};
	return currentChar && !isSelected ? 
        <div></div> :
        <div style={{width: isSelected && '100%'}}>
            {char.family ? 
                <div style={{display: 'flex'}} onClick={onClick}>
                    <div className='treeNode' style={selectedStyle}>
                        <img style={{height: '56vh', ...(!isSelected && char.styles)}} src={char.picture} />
                    </div>
                    {!currentChar && !isMobile && 
                    <div className='treeNode' style={{position: 'absolute', marginLeft: 'calc(10vh + 5px)'}}>
                        <img style={{height: '56vh', ...char.family[0].styles}} src={char.picture} />
                    </div>}
                    {!currentChar && !isMobile && 
                    <div className='treeNode' style={{position: 'absolute', marginLeft: 'calc(5vh + 5px)', marginTop: 'calc(14vh + 5px)'}}>
                        <img style={{height: '56vh', ...char.family[1].styles}} src={char.picture} />
                    </div>}
                </div> :
                <div className='treeNode' style={selectedStyle} onClick={onClick}>
                    <img style={{height: '56vh', ...(!isSelected && char.styles)}} src={char.picture} />
                </div>
            }
            {isSelected && <div style={{width: '100%', fontFamily: 'EB Garamond', fontSize: '1.5em', color: '#d3ab6a', backgroundColor: 'rgba(0,0,0,.5)'}}>
                <div style={{fontSize: '2.5em'}}>{char.name}</div>
                <div style={{marginLeft: '10px', fontSize: '.9em'}}>{char.subtitle}</div>
                <div style={{marginLeft: '10px', fontSize: '1.5em'}}>{char.title} - {char.age}</div>
                {char.quote && char.quote.map(line => 
                <div style={{width: '70%', fontSize: '1.5em', textAlign: 'center', margin:'15px'}}>
                    {line}
                </div>)}
            </div>}
        </div>
}

export default FamilyTreeNode;