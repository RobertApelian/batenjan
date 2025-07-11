import React from 'react'
import Az from '../images/Az.png'

const FamilyTreeNode = ({currentChar, char, onClick}) => {
    const isSelected = currentChar === char.key;
    const selectedStyle = isSelected ? {
        height: '100%',
        width: 'calc(100% - 10px)',
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
                    {!currentChar && 
                    <div className='treeNode familyNode' style={{position: 'absolute', marginLeft: 'calc(10vh + 5px)'}}>
                        <img style={{height: '56vh', ...char.family[0].styles}} src={char.picture} />
                    </div>}
                    {!currentChar && 
                    <div className='treeNode familyNode' style={{position: 'absolute', marginLeft: 'calc(5vh + 5px)', marginTop: 'calc(14vh + 5px)'}}>
                        <img style={{height: '56vh', ...char.family[1].styles}} src={char.picture} />
                    </div>}
                </div> :
                <div className='treeNode' style={selectedStyle} onClick={onClick}>
                    <img style={{height: '56vh', zIndex: '1', ...(!isSelected && char.styles)}} src={char.picture} />
                </div>
            }
            {isSelected && <div style={{width: '100%', textAlign: 'center', fontFamily: 'EB Garamond', fontSize: '1.5em', color: '#d3ab6a'}}>
                <div className='textLink' onClick={onClick}>{'< Back'}</div>
                <div style={{fontSize: '2em'}}>{char.name}</div>
                <div style={{marginLeft: '10px', fontSize: '.9em'}}>{char.subtitle}</div>
                <div style={{marginLeft: '10px', fontSize: '1em'}}>{char.age}</div>
                <div style={{fontSize: '1em', textAlign: 'left'}}>
                    <div style={{fontSize: '4em', marginBottom: '-.5em'}}>“</div>
                    <div style={{margin: '0px 2em', justifyContent: 'center', display:'flex'}}>{char.quote}</div>
                    <div style={{fontSize: '4em', textAlign: 'right'}}>” </div>
                </div>
            </div>}
        </div>
}

export default FamilyTreeNode;