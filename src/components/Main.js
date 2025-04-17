import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';

import Cover from './Cover';
import Author from './Author';
import AboutFustuk from './AboutFustuk';
import FamilyTree from './FamilyTree';
import Navigation from './Navigation';
import Recipes from './Recipes';
import '../styles/ebGaramond.css';

const isMobile = window.screen.availWidth < 800;

const pages = [
    {
        id: 0,
        title: 'About Me',
        component: <Author />
    },
    {
        id: 1,
        title: 'Main',
        component: <Cover />
    },
    {
        id: 2,
        title: 'About the Book',
        component: <AboutFustuk />
    },
    {
        id: 3,
        title: 'Characters',
        component: <FamilyTree />
    },
    {
        id: 4,
        title: 'Recipes',
        component: <Recipes />
    }
];


const Main = () => {
    const [index, setIndex] = useState(1);
	return <SwipeableViews index={index} onChangeIndex={setIndex} slideStyle={{height: '100vh'}}>
        {pages.map((page, i) => 
            <div style={{display: 'flex', width: '100%', justifyContent: 'center', userSelect: 'none'}}>
                {!isMobile && <Navigation isLeft page={pages[i > 0 ? i-1 : pages.length-1]} setIndex={setIndex}/>}
                {page.component}
                {!isMobile && <Navigation page={pages[(i+1)%pages.length]} setIndex={setIndex}/>}
            </div>
        )}
    </SwipeableViews>
}

export default Main;