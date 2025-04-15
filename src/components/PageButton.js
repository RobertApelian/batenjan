import React from 'react'

const PageButton = ({page, onClick}) => {
     return <b className='button' onClick={onClick}>{page.title}</b>;
}

export default PageButton;