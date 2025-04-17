import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';

import Cover from './Cover';
import Author from './Author';
import AboutFustuk from './AboutFustuk';
import FamilyTree from './FamilyTree';
import Navigation from './Navigation';
import Recipes from './Recipes';
import '../styles/ebGaramond.css';

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

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const Main = () => {
    const [index, setIndex] = useState(1);
	return <BindKeyboardSwipeableViews index={index} onChangeIndex={setIndex} slideStyle={{height: '100vh'}}>
        {pages.map((page, i) => 
            <div style={{display: 'flex', width: '100%', height: '100%', minHeight: 'fit-content', justifyContent: 'center', userSelect: 'none'}}>
                <Navigation isLeft page={pages[i > 0 ? i-1 : pages.length-1]} setIndex={setIndex}/>
                {page.component}
                <Navigation page={pages[(i+1)%pages.length]} setIndex={setIndex}/>
            </div>
        )}
    </BindKeyboardSwipeableViews>
}

export default Main;