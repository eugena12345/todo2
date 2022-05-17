import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import style from './InputTask.module.css';
const someFunction = () => {
    console.log('Click Add Task')
}



const InputTask = (props) => {
    const [value, setValue] = useState('hi');
    return (
        <div className={style.inputTask}>
            <input type="text" className={style.inputTask2} placeholder="I want to..." value={value}
                onChange={event => setValue(event.target.value)} />
            <Button buttonText={'Add Task'} />
        </div>
    )
}

export default InputTask;