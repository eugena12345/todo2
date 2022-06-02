import React, { useState, useEffect } from "react";
import style from './Task.module.css';
import bnnStyle from '../../Button/Button.module.css';
import deleteImg from '../../../image/trash.jpg';
import InputForChangeTask from "../../InputForChangeTask/InputForChangeTask";

const Task = (props) => {

    const isChecked = (isCompleted) => isCompleted === true ? 'checked' : false;///
    const [editMode, setEditMode] = useState(false);///

    return (
        <div >
            {editMode
                ? <InputForChangeTask setEditMode={setEditMode} editMode={editMode}
                    taskText={props.task.taskText} setTaskList={props.setTaskList}
                    taskList={props.taskList}
                    taskID={props.task.id}
                />
                : <div className={style.task}>
                    <div className={style.leftSide} onDoubleClick={() => setEditMode(true)}>
                        <div className={style.check}>
                            <input type='checkbox' checked={isChecked(props.task.isCompleted)}///чтобы отображать после перезагрузки страницы галочку
                                onChange={() => props.changeCompleted(props.task)}
                            />
                        </div>
                        <div className={style.taskTexst}>{props.task.taskText}</div>
                    </div>
                    <div className={style.rightSide}>
                        <div >{props.task.taskDate}</div>
                        <div className={style.deleteTask}>
                            <img className={`${style['border-img']} ${bnnStyle['delete-button']}`}
                                src={deleteImg} alt="delete" width="40px" height="40px"
                                onClick={() => props.removeTask(props.task)} />
                        </div>
                    </div>
                </div>}

        </div>
    )
}

export default Task;