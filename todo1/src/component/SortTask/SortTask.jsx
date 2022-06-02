import React, { useState } from "react";
import SortByDate from "./SortByDate/SortByDate";
import SortByStatus from "./SortByDone/SortByStatus";

import style from './SortTask.module.css';

const SortTask = ({ setCurretnPage, setTypeOfSorted, typeOfSorted }) => {

    return (
        <div className={style.controlPanel}>
            <SortByStatus
                setCurretnPage={setCurretnPage}
                setTypeOfSorted={setTypeOfSorted}
                typeOfSorted={typeOfSorted}
            />
            <SortByDate
                typeOfSorted={typeOfSorted}
                setTypeOfSorted={setTypeOfSorted}
            />
        </div>
    )
};

export default SortTask;