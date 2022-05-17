import React from "react";
import style from './Button.module.css';

const Button = (props) => {
    return(
<button className={style['floating-button']}>{props.buttonText}</button>
    )
}

export default Button;