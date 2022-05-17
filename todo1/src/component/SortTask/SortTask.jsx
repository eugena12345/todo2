import React from "react";
import SortByDate from "./SortByDate/SortByDate";
import SortByStatus from "./SortByDone/SortByStatus";

import style from './SortTask.module.css';

const someFunction = () => {
    console.log('Click Add Task')
}

const SortTask = (props) => {
    return (
        <div className={style.controlPanel}>
            <SortByStatus />
            <SortByDate />
        </div>
    )
};

export default SortTask;