import React from "react";
import Button from "../../Button/Button";
import style from './SortByStatus.module.css';

const optionSortByDone = ['All', 'Done', 'Undone']

const SortByStatus = () => {
    return (
        <div className={style.sortPanel}>
            <Button buttonText={'All'} />
            <Button buttonText={'Done'} />
            <Button buttonText={'Undone'} />
        </div>
    )
}

export default SortByStatus;