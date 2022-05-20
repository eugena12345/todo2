import React from "react";
import { useState } from "react";
import MyButton from "../Button/MyButton";
import style from './InputTask.module.css';

const InputTask = (props) => {
    const [taskText, setTaskText] = useState('');

    const getDate = (date = new Date()) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return (`${day}/${month}/${year}`);
    }

    const addNewTask = (event) => {
        if (event.code === 'Enter') {
            if (event.target.value) {
                const newTask = {
                    id: Date.now(),
                    taskText: event.target.value,
                    taskDate: getDate(),
                    miliTaskDate: Date.now(),
                    isCompleted: false,
                };
                props.setTaskList([...props.taskList, newTask])
                setTaskText('');
            }

        } else if (event.code === 'Escape') {
            setTaskText('');
        }
    }

    return (
        <div className={style.inputTask}>
            <input type="text" className={style.inputTask2} placeholder="I want to..." value={taskText}
                onChange={event => setTaskText(event.target.value)} onKeyDown={addNewTask} />
        </div>
    )
}

export default InputTask;