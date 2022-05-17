import React from "react";
import Button from "../../Button/Button";
import style from './SortByStatus.module.css';

const optionSortByDone = ['All', 'Done', 'Undone']

const SortByStatus = () => {
    return (
        <div className={style.sortPanel}>
            <Button>All</Button> 
            <Button>Done</Button> 
            <Button>Undone</Button> 
        </div>
    )
}

export default SortByStatus;