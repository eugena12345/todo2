import React, { useState } from "react";
import SortByDate from "./SortByDate/SortByDate";
import SortByStatus from "./SortByDone/SortByStatus";

import style from './SortTask.module.css';

const SortTask = (props) => {
    // const [sortedByStatus, setSortedByStatus] = useState(false); //delete

    return (
        <div className={style.controlPanel}>
            <SortByStatus taskList={props.taskList} filtredTodoList={props.filtredTodoList}
                setFiltredTodoList={props.setFiltredTodoList}
                setCurretnPage={props.setCurretnPage} 
                // setSortedByStatus={setSortedByStatus} 
                />
            <SortByDate taskList={props.taskList} setTaskList={props.setTaskList}
                filtredTodoList={props.filtredTodoList}
                // sortedByStatus={sortedByStatus}
                 />
        </div>
    )
};

export default SortTask;