import React from 'react';
import { createPortal } from 'react-dom';


const Modal = ({isOpen, setOpen}) => (
    isOpen && createPortal(
        <div className='fixedFullscreen'>
            <div className='modalContent'>
                test ma balls
            </div>
            <div className='fixedFullscreen modalBackdrop' onClick={() => setOpen(false)}/> 
        </div>,
        document.body
    )
);

export default Modal;