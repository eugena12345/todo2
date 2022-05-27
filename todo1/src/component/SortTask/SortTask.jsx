import React, { useState } from "react";
import SortByDate from "./SortByDate/SortByDate";
import SortByStatus from "./SortByDone/SortByStatus";

import style from './SortTask.module.css';

const SortTask = (props) => {
    
    return (
        <div className={style.controlPanel}>
            <SortByStatus taskList={props.taskList} filtredTodoList={props.filtredTodoList}
                setFiltredTodoList={props.setFiltredTodoList}
                setCurretnPage={props.setCurretnPage} 
                sort={props.sort} setTypeOfSorted={props.setTypeOfSorted} typeOfSorted={props.typeOfSorted}
    
                />
            <SortByDate taskList={props.taskList} setTaskList={props.setTaskList}
                filtredTodoList={props.filtredTodoList} 
                setTypeOfSorted={props.setTypeOfSorted} typeOfSorted={props.typeOfSorted}
    
                 />
        </div>
    )
};

export default SortTask;