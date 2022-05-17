import React from "react";
import style from './Task.module.css';

const Task = (props) => {
    console.log(props);
    return (
        <div className={style.task}>
            <div className={style.leftSide}>
                <div className={style.check}>
                    <input type='checkbox' />
                </div>
                <div className={style.taskTexst}>{props.task.taskText}</div>
            </div>
            <div className={style.rightSide}>
                <div className='taskDate'>{props.task.taskDate}</div>
                <div className={style.deleteTask}>
                    <img className="delete-button {style.border-img}"
                        src="./../" alt="delete" width="40px" height="40px" />
                </div>
            </div>
        </div>
    )
}

export default Task;