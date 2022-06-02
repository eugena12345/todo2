import React, { useState } from "react";
import Task from "./Task/Task";
import style from './TaskList.module.css';




const TaskList = (props) => {

    const changeCompleted = (task) => {
        const newTaskList = [...props.taskList].filter((item) => {//
            if (item.id === task.id) {
                item.isCompleted = !item.isCompleted;
            }
            return item
        })
        props.setTaskList(newTaskList);
    }

    return (
        <div className={style.tasks}>
            {props.currentTasks.map(task =>
                <Task task={task} key={task.id} removeTask={props.removeTask}
                    setTaskList={props.setTaskList} taskList={props.taskList}
                    changeCompleted={changeCompleted} />
            )}


        </div>
    )
}

export default TaskList;