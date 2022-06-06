import React, { useState } from "react";
import Task from "./Task/Task";
import style from './TaskList.module.css';




const TaskList = ({taskList, setTaskList, filtredTodoList, removeTask, changeDone, changeTaskText}) => {

    

    return (
        <div className={style.tasks}>
            {taskList.map(task =>
                <Task task={task} key={task.uuid} removeTask={removeTask}
                    setTaskList={setTaskList} taskList={taskList}
                    changeDone={changeDone} changeTaskText={changeTaskText} />
            )}


        </div>
    )
}

export default TaskList;