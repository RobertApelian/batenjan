import React from 'react'
import Food from '../images/Food.png'

const Recipes = () => <div style={{width: '100vw', height: '100vh', display:'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(0,0,0,.4)'}}>
    <img src={Food} style={{height: '28vh', marginTop: '30vh'}}/>
    <div style={{fontFamily: 'EB Garamond', color: 'white', textAlign: 'center', fontSize: '2em'}}>
        Recipes coming soon!
    </div>
</div>

export default Recipes;