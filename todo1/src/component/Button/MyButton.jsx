import React from "react";
import style from './Button.module.css';

const MyButton = ({ children, ...props }) => {

    return (
        <button {...props}
            className={props.currentbutton === props.button
                ? `${style['floating-button']} ${style['currentPage']}`
                : style['floating-button']}>
            {children}
        </button>
    )
}

export default MyButton;