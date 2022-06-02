import React from "react";
import { useState } from "react";
import style from './../InputTask/InputTask.module.css';

const InputForChangeTask = ({ previousTaskText, taskList, taskID, setTaskList, setEditMode }) => {
  const [taskText, setTaskText] = useState(previousTaskText);

  const changeTaskText = (event) => {
    if (event.code === 'Enter') {
      if (taskText) {

        const newTaskList = [...taskList].filter((item) => {
          if (item.id === taskID) {
            item.taskText = taskText;
          }
          return item;
        })
        setTaskList(newTaskList);
        setEditMode(false);
      }
    } else if (event.code === 'Escape') {
      setEditMode(false);
    }
  }

  return (
    <div className={style.inputTask}>
      <input type="text" className={style.inputTask2} value={taskText}
        onChange={event => setTaskText(event.target.value)} onKeyDown={changeTaskText} />
    </div>
  )

}
export default InputForChangeTask;