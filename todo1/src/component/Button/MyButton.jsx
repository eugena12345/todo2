import React from "react";
import style from './Button.module.css';

const MyButton = ({children, ...props}) => {

    return (
        <button {...props}
         className={style['floating-button']}>{children}
        </button>
    )
}

export default MyButton;