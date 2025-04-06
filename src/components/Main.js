import React from 'react'
import Cover from './Cover'
import Text from './Text'
import '../styles/vulfMono.css';
import '../styles/ebGaramond.css';

const Main = () => {
	return <div style={{display: 'flex', width: '100%', flexWrap: 'wrap'}}>
  		<Cover />
        <Text />
	</div>
}

export default Main;