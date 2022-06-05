import React, { useState } from "react";
import Task from "./Task/Task";
import style from './TaskList.module.css';




const TaskList = ({taskList, setTaskList, filtredTodoList, removeTask}) => {

    const changeCompleted = (task) => {
        const newTaskList = [...taskList].filter((item) => {//
            if (item.uuid === task.uuid) {
                item.done = !item.done;
            }
            return item
        })
        setTaskList(newTaskList);
    }

    return (
        <div className={style.tasks}>
            {taskList.map(task =>
                <Task task={task} key={task.uuid} removeTask={removeTask}
                    setTaskList={setTaskList} taskList={taskList}
                    changeCompleted={changeCompleted} />
            )}


        </div>
    )
}

export default TaskList;