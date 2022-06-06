import React from "react";
import { useState } from "react";
import style from './../InputTask/InputTask.module.css';

const InputForChangeTask = ({ previousTaskText, taskList, taskID, setTaskList, setEditMode, changeTaskText }) => {
  const [taskText, setTaskText] = useState(previousTaskText);



  const updateTaskText = (event) => {
    if (event.code === 'Enter') {
      if (taskText) {
        changeTaskText(taskID, taskText);
        setEditMode(false);
      }
    } else if (event.code === 'Escape') {
      setEditMode(false);
    }
  }

  return (
    <div className={style.inputTask}>
      <input type="text" className={style.inputTask2} value={taskText}
        onChange={event => setTaskText(event.target.value)} onKeyDown={updateTaskText} />
    </div>
  )

}
export default InputForChangeTask;