import React from "react";
import SortByDate from "./SortByDate/SortByDate";
import SortByStatus from "./SortByDone/SortByStatus";

import style from './SortTask.module.css';

const SortTask = (props) => {
    return (
        <div className={style.controlPanel}>
            <SortByStatus taskList={props.taskList} setFiltredTodoList={props.setFiltredTodoList} />
            <SortByDate taskList={props.taskList} setFiltredTodoList={props.setFiltredTodoList}/>
        </div>
    )
};

export default SortTask;