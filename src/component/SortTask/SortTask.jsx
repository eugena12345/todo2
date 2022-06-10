import React, { useState } from "react";
import SortByDate from "./SortByDate/SortByDate";
import SortByStatus from "./SortByDone/SortByStatus";

import style from './SortTask.module.css';

const SortTask = ({ setCurretnPage, setTypeOfSorted, typeOfSorted, 
    getSortByDateTaskList, getSortByStatusTaskList }) => {

    return (
        <div className={style.controlPanel}>
            <SortByStatus
                setCurretnPage={setCurretnPage}
                setTypeOfSorted={setTypeOfSorted}
                typeOfSorted={typeOfSorted}
                getSortByStatusTaskList={getSortByStatusTaskList}
            />
            <SortByDate
                typeOfSorted={typeOfSorted}
                setTypeOfSorted={setTypeOfSorted}
                getSortByDateTaskList={getSortByDateTaskList}
            />
        </div>
    )
};

export default SortTask;