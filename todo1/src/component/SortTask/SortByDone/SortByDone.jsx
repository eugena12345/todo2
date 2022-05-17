import React from "react";
import style from './SortByDone.module.css';

const optionSortByDone = ['All', 'Done', 'Undone']

const SortByDone = () => {
    return (
        <div className={style.sortPanel}>
            <button className="floating-button">All</button>
            <button className="floating-button">Done</button>
            <button className="floating-button">Undone</button>
        </div>
    )
}

export default SortByDone;