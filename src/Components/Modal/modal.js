import React from 'react'
import "./modal.css"

const Modal = (props) => {
    return (
        <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`}>
            <div className='modal__body'>
                <div 
                    className='modal__close'
                    onClick={props.onModalClose}
                    >
                    ×
                </div>
                <h2>
                    {props.title}
                </h2>
                <hr/>
                {/*props.children - тут будет контекст который передается в компонент */}
                {props.children}
            </div>
        </div>
    )
}

export default Modal
