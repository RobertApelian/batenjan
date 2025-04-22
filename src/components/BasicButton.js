import React from 'react'


const BasicButton = ({link, text}) => (
    <a target="_blank" className='preorderWrapper' href={link}>
        <div className="preorder">
            <div className="preorderInner">
                <div className='preorderInner2'>
                    Preorder Now
        </div></div></div>
    </a>
);

export default BasicButton;