import React, { useState, useEffect } from "react";
import style from './Task.module.css';
import bnnStyle from '../../Button/Button.module.css';
import deleteImg from '../../../image/trash.jpg';
import InputForChangeTask from "../../InputForChangeTask/InputForChangeTask";

const Task = ({ task, changeDone, removeTask, changeTaskText }) => {

    const isChecked = (isCompleted) => isCompleted === true ? 'checked' : false;///
    const [editMode, setEditMode] = useState(false);///

    return (
        <div >
            {editMode
                ? <InputForChangeTask previousTaskText={task.name}
                    taskID={task.uuid}
                    setEditMode={setEditMode}
                    changeTaskText={changeTaskText}
                />
                : <div className={style.task}>
                    <div className={style.leftSide} onDoubleClick={() => setEditMode(true)}>
                        <div className={style.check}>
                            <input type='checkbox' checked={isChecked(task.done)}///чтобы отображать после перезагрузки страницы галочку
                                onChange={() => changeDone(task)}
                            />
                        </div>
                        <div className={style.taskTexst}>{task.name}</div>
                    </div>
                    <div className={style.rightSide}>
                        <div >{task.createdAt.slice(0, 10)}</div>
                        <div className={style.deleteTask}>
                            <img className={`${style['border-img']} ${bnnStyle['delete-button']}`}
                                src={deleteImg} alt="delete" width="40px" height="40px"
                                onClick={() => removeTask(task.uuid)} />
                        </div>
                    </div>
                </div>}

        </div>
    )
}

export default Task;