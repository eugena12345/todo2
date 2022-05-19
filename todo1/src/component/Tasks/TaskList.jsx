import React, { useState } from "react";
import Task from "./Task/Task";
import style from './TaskList.module.css';




const Tasks = (props) => {

    

    return (
        <div className={style.tasks}>
            {props.taskList.map(task =>
                <Task task={task} key={task.id} removeTask={props.removeTask} />
            )}


        </div>
    )
}

export default Tasks;