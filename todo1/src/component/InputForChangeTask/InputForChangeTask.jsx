import React from "react";
import { useState } from "react";
import MyButton from "../Button/MyButton";
import style from './../InputTask/InputTask.module.css';

const InputForChangeTask = (props) => {
  const [taskText, setTaskText] = useState(props.taskText);

  const changeTaskText = (event) => {
    if (event.code === 'Enter') {
      if (event.target.value) {


        const newTaskList = [...props.taskList].filter((item) => {
          if (item.id === props.taskID) {
            item.taskText = event.target.value;
          }
          return item
        })
        props.setTaskList(newTaskList);
        props.setEditMode(!props.editMode)
      }
    } else if (event.code === 'Escape') {
      props.setEditMode(!props.editMode);
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