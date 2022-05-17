import React, { useState } from "react";
import Task from "./Task/Task";
import style from './Tasks.module.css';




const Tasks = (props) => {

    const [tasks, setTasks] = useState([
        { id: 1, taskText: 'Do something', taskDate: '10/04/2022' },
        { id: 2, taskText: 'Do more', taskDate: '10/04/2022' },
        { id: 3, taskText: 'Learn React', taskDate: '10/04/2022' },
    ]
    )

    return (
        <div className={style.tasks}>
            {tasks.map(task =>
                <Task task={task} />
            )}


        </div>
    )
}

export default Tasks;