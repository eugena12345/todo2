import React from "react";
import style from './Button.module.css';

const Button = (props) => {

    return (
        <button className={style['floating-button']}>{props.children}
        </button>
    )
}

export default Button;