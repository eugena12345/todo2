import React from "react";
import MyButton from "../../Button/MyButton";
import style from './SortByStatus.module.css';

const optionSortByDone = ['All', 'Done', 'Undone']

const SortByStatus = () => {
    return (
        <div className={style.sortPanel}>
            <MyButton>All</MyButton>
            <MyButton>Done</MyButton>
            <MyButton>Undone</MyButton>
        </div>
    )
}

export default SortByStatus;