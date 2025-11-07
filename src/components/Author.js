import React from 'react'
import Me  from '../images/me.png'

const AuthorText = `is an Armenian American author-illustrator based
in Everett, Massachusetts. He’s an avid reader of
indie comics and seinen manga and is especially
passionate about making the most of comics as a
storytelling medium. A primary goal of his work is
to celebrate the diversity and cultural excellence
of the Middle East and to portray it as something
other than tragic and war-torn.`;

const Author = () => {
	return <div className='scrollContainer'>
        <div className='authorContainer'>
            <img alt='Author self portrait' width='100%' src={Me}/>
            <div style={{fontFamily: 'EB Garamond', fontSize: '3em', textAlign: 'center', color: '#292e7b'}}><b>Robert Mgrdich Apelian</b></div>
            <div style={{fontFamily: 'EB Garamond', fontSize: '1.5em', textAlign: 'center', color: '#292e7b', margin: '15px 5% 0'}}>{AuthorText}</div>
            <div style={{fontFamily: 'EB Garamond', fontSize: '1.5em', textAlign: 'center', color: '#292e7b', margin: '15px 5% 0'}}>I do school and library visits! To learn more, email <b>PYRAuthorVisits@prh.com</b></div>
        </div>
    </div>
}

export default Author;