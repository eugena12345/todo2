import React from "react";
import { useState } from "react";
import style from './../InputTask/InputTask.module.css';

const InputForChangeTask = (props) => {
  const [taskText, setTaskText] = useState(props.taskText);

  const changeTaskText = (event) => {
    if (event.code === 'Enter') {
      if (taskText) {


        const newTaskList = [...props.taskList].filter((item) => {
          if (item.id === props.taskID) {
            item.taskText = taskText;
          }
          return item;
        })
        props.setTaskList(newTaskList);
        props.setEditMode(false);
      }
    } else if (event.code === 'Escape') {
      props.setEditMode(false);
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