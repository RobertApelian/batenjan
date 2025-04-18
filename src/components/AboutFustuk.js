import React from 'react';
import CharacterPage from './CharacterPage';
import Spot from '../images/spot.png';

const coverCopy = [
    'Seventeen-year-old Katah Fustukian has always felt like the odd one out in his family of chefs. Unlike his older siblings, he is useless in the kitchen, and too young to have known their late father—a legendary Hye chef who’d made a name for himself in the Pars Empire.',
    'But with his mom’s illness worsening, Katah hopes that his vision-like dreams are a sign of magic stirring within him—especially after they lead him to Az, a powerful div with some mysterious connection to his family. In an attempt to save their mom’s life, he and his siblings strike a deal: Az’s help in exchange for a dish that rivals their father’s.',
    'But after the siblings clash over what to cook, Katah will have to make sense of his magic and family history—and wager far more than a single meal to meet Az’s demands...',
    '',
    'Creator Robert Mgrdich Apelian weaves together multiple timelines in an inventive, fantastical story of Armenian family and food, speaking to diasporic culture and how those within it relate to their different worlds.'
];

const pages = [
    {
        name: 'About Fustuk',
        subtitle: '',
        age: null,
        title: 'About',
        picture: Spot,
        quote:  coverCopy
    }
];

const AboutFustuk = () => {
	return <div className='scrollContainer'>
        <div className='aboutPage'>
            <CharacterPage {...pages[0]} />
        </div>
    </div>
}

export default AboutFustuk;