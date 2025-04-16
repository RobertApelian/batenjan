import React, {useState} from 'react'
import Katah  from '../images/Katah.png'
import Noori  from '../images/Noori.png'
import Garo  from '../images/Garo.png'
import Anoush  from '../images/Anoush.png'
import Tsoren from '../images/Tsoren.png'

import FamilyTreeNode from './FamilyTreeNode'

const coverCopy = [
    'Seventeen-year-old Katah Fustukian has always felt like the odd one out in his family of chefs. Unlike his older siblings, he is useless in the kitchen, and too young to have known their late father—a legendary Hye chef who’d made a name for himself in the Pars Empire.',
    'But with his mom’s illness worsening, Katah hopes that his vision-like dreams are a sign of magic stirring within him—especially after they lead him to Az, a powerful div with some mysterious connection to his family. In an attempt to save their mom’s life, he and his siblings strike a deal: Az’s help in exchange for a dish that rivals their father’s.',
    'But after the siblings clash over what to cook, Katah will have to make sense of his magic and family history—and wager far more than a single meal to meet Az’s demands...',
    '',
    'Creator Robert Mgrdich Apelian weaves together multiple timelines in an inventive, fantastical story of Armenian family and food, speaking to diasporic culture and how those within it relate to their different worlds.'
];

const chars = [
    {
        key: 0,
        name: null,
        subtitle: '',
        age: null,
        title: 'About',
        picture: null,
        quote:  coverCopy
    },
    {
        key: 1,
        name: 'Katah Fustukian',
        subtitle: '',
        age: '6 months (then), 17 years (now)',
        title: 'Me',
        picture: Katah,
        styles: {marginLeft: '-17vh', marginTop: '-6vh'},
        quote: []
    },
    {
        key: 2,
        name: 'Noori Fustukian',
        subtitle: '',
        age: '13 (then), 30 (now)',
        title: 'Big Sister',
        picture: Noori,
        styles: {marginLeft: '-32vh', marginTop: '-4vh'},
        quote: []
    },
    {
        key: 3,
        name: 'Garaked (Garo) Fustukian',
        subtitle: 'and his wife Talar and daughter Tsorineh',
        age: '11 (then), 29 (now)',
        title: 'Big Brother',
        picture: Garo,
        styles: {marginLeft: '-25vh'},
        quote: [],
        family: [
            {
                name: 'Talar',
                styles: {marginLeft: '-38vh', marginTop: '-5vh'}
            },
            {
                name: 'Tsorineh',
                styles: {marginLeft: '-30vh', marginTop: '-29vh'}
            }
        ]
    },
    {
        key: 4,
        name: 'Anoush Fustukian',
        subtitle: '',
        age: '37 (then), 54 (now)',
        title: 'Mom',
        picture: Anoush,
        styles: {marginLeft: '-16vh'},
        quote: []
    },
    {
        key: 5,
        name: 'Tsoren Fustukian',
        subtitle: '',
        age: '46 (then)',
        title: 'Dad',
        picture: Tsoren,
        styles: {marginLeft: '-10vh'},
        quote: []
    }
];

//family tree with full sized images, when you click them they expand and all the other elements become hidden, and i can animate all of that?
//and then the sidebar always exists but also is hidden and expands which is also animated?


const FamilyTree = () => {
    const [currentChar, setChar] = useState(0);
	return <div style={{width: '500vw', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5vh 10vh 0', backgroundColor: 'rgba(0,0,0,.4)'}}>
        <div style={{fontFamily: 'EB Garamond', width: '100%', fontSize: '5em', color: '#d3ab6a', textAlign: 'center', marginBottom: '3vh', textShadow: '3px 3px rgba(0,0,0,.7)'}}>The Fustukian Family</div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <FamilyTreeNode currentChar={currentChar} char={chars[5]} onClick={() => setChar(currentChar == 5 ? 0 : 5)}/>
            {!currentChar && <div className='hconnector' />}
            <FamilyTreeNode currentChar={currentChar} char={chars[4]} onClick={() => setChar(currentChar == 4 ? 0 : 4)}/>
        </div>
        {!currentChar && <div className='vconnector' />}
        {!currentChar && <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <div style={{height: '10vh', width: '19vw', borderTop: '5px #d3ab6a solid', borderLeft: '5px #d3ab6a solid'}} />
            <div style={{height: '10vh', width: '19vw', borderTop: '5px #d3ab6a solid', borderLeft: '5px #d3ab6a solid'}} />
            <div style={{height: 'calc(10vh + 5px)', borderLeft: '5px #d3ab6a solid'}} />
        </div>}
        <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
            <FamilyTreeNode currentChar={currentChar} char={chars[2]} onClick={() => setChar(currentChar == 2 ? 0 : 2)}/>
            <FamilyTreeNode currentChar={currentChar} char={chars[1]} onClick={() => setChar(currentChar == 1 ? 0 : 1)}/>
            <FamilyTreeNode currentChar={currentChar} char={chars[3]} onClick={() => setChar(currentChar == 3 ? 0 : 3)}/>
        </div>
    </div>
}

export default FamilyTree;