import React from "react";
import { useState } from "react";
import style from './InputTask.module.css';
const someFunction = () => {
    console.log('Click Add Task')
}



const InputTask = (props) => {
    const [value, setValue] = useState('hi');
    return (
        <div className={style.inputTask}>
            {/* <h1>{value}</h1> */}
            <input type="text" className={style.inputTask2} placeholder="I want to..." value={value}
                onChange={event => setValue(event.target.value)} />
            <button onClick={someFunction}>Add Task</button>
        </div>
    )
}

export default InputTask;