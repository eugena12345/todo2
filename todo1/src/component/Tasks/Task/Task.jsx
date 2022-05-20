import React, { useState } from "react";
import style from './Task.module.css';
import bnnStyle from '../../Button/Button.module.css';
import deleteImg from '../../../image/trash.jpg';

const Task = (props) => {
   // const [check, setCheck] = useState({isCompleted: 'false'})

   
    
    return (
        <div className={style.task}>
            <div className={style.leftSide}>
                <div className={style.check}>
                    <input type='checkbox' onChange={() => props.changeCompleted(props.task)} />
                </div>
                <div className={style.taskTexst}>{props.task.taskText}</div>
            </div>
            <div className={style.rightSide}>
                <div className='taskDate'>{props.task.taskDate}</div>
                <div className={style.deleteTask}>
                    <img className={`${style['border-img']} ${bnnStyle['delete-button']}`}
                        src={deleteImg} alt="delete" width="40px" height="40px" 
                        onClick={() => props.removeTask(props.task)}/>
                </div>
            </div>
        </div>
    )
}

export default Task;