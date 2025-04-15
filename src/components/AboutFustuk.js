import React, {useState} from 'react';
import CharacterPage from './CharacterPage';
import PageButton from './PageButton';

import Katah  from '../images/Katah.png'
import Noori  from '../images/Noori.png'
import Garo  from '../images/Garo.png'
import Anoush  from '../images/Anoush.png'
import Cover from '../images/covermain.png'

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
        picture: null,
        quote:  coverCopy
    },
    {
        name: 'Katah Fustukian',
        subtitle: '',
        age: '6 months (then), 17 years (now)',
        title: 'Katah',
        picture: Katah,
        quote: ['I never knew my father... but I have dreams of him.', `They're like memories that don't belong to me. They can't.`, 'And yet every day, it seems...', 'These memories are getting clearer.']
    },
    {
        name: 'Noori Fustukian',
        subtitle: '',
        age: '13 (then), 30 (now)',
        title: 'Big Sister',
        picture: Noori,
        quote: [`I won't accept that limiting ourselves to a certain set of ingredients and tools just because we're Hye was a meaningful part of our father's beliefs.`, `His love of his craft - and hunger for success - that's what made him such a legend.`]
    },
    {
        name: 'Garaked (Garo) Fustukian',
        subtitle: 'and his wife Talar and daughter Tsorineh',
        age: '11 (then), 29 (now)',
        title: 'Big Brother',
        picture: Garo,
        quote: [`I'm not trying to pick fights, but it frustrates me that it doesn't seem like any of you care.`, `It's not just about the food. It's our identity - our history! It's important!`]
    },
    {
        name: 'Anoush Fustukian',
        subtitle: '',
        age: '37 (then), 54 (now)',
        title: 'Mom',
        picture: Anoush,
        quote: [`I know, I know. I shouldn't have pushed myself.`, ` I just... wanted it to be special.`, `We don't all get together that much anymore.`]
    }
];

const AboutFustuk = () => {
    const [currentPage, setPage] = useState(0);
	return <div style={{height: '100vh', backgroundColor: 'rgba(0,0,0,.7)', color: '#FFFFFF', width: '80vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <CharacterPage {...pages[currentPage]} />
        <div style={{display: 'flex', width: '100%'}}>
        {pages.map((page, i) =>
            <PageButton page={page} onClick={() => setPage(i)} />)}
        </div>
	</div>
}

export default AboutFustuk;