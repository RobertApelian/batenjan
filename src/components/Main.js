import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';


import Cover from './Cover';
import Author from './Author';
import AboutFustuk from './AboutFustuk';
import Navigation from './Navigation';
import '../styles/vulfMono.css';
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
    }
];


const Main = () => {
    const [index, setIndex] = useState(1);
	return <SwipeableViews index={index} onChangeIndex={setIndex}>
        {pages.map((page, i) => 
            <div style={{display: 'flex', width: '100%', justifyContent: 'center', userSelect: 'none'}}>
                <Navigation isLeft page={pages[i > 0 ? i-1 : 2]} setIndex={setIndex}/>
                {page.component}
                <Navigation page={pages[(i+1)%pages.length]} setIndex={setIndex}/>
            </div>
        )}
    </SwipeableViews>
}

export default Main;