import React from "react";
import SortByDate from "./SortByDate/SortByDate";
import SortByDone from "./SortByDone/SortByDone";
import style from './SortTask.module.css';

const someFunction = () => {
    console.log('Click Add Task')
}

const SortTask = (props) => {
    return (
        <div className={style.controlPanel}>
            <SortByDone />
            <SortByDate />
        </div>
    )
};

export default SortTask;