import React, { useState } from "react";
import Task from "./Task/Task";
import style from './TaskList.module.css';




const TaskList = ({taskList, setTaskList, currentTasks, removeTask}) => {

    const changeCompleted = (task) => {
        const newTaskList = [...taskList].filter((item) => {//
            if (item.id === task.id) {
                item.isCompleted = !item.isCompleted;
            }
            return item
        })
        setTaskList(newTaskList);
    }

    return (
        <div className={style.tasks}>
            {currentTasks.map(task =>
                <Task task={task} key={task.id} removeTask={removeTask}
                    setTaskList={setTaskList} taskList={taskList}
                    changeCompleted={changeCompleted} />
            )}


        </div>
    )
}

export default TaskList;