import React, { useState } from "react";
import MyButton from "../../Button/MyButton";
import style from './SortByStatus.module.css';

const ALL = 'all';
const DONE = 'done';
const UNDONE = 'undone';

const SortByStatus = ({typeOfSorted, setTypeOfSorted, setCurretnPage, }) => {
    const [order, setOrder] = useState(ALL);

    const orderUndone = () => {
        setTypeOfSorted({ ...typeOfSorted, typeSortedByStatus: UNDONE })
        setOrder(UNDONE);
    };
    const orderDone = () => {
        setTypeOfSorted({ ...typeOfSorted, typeSortedByStatus: DONE });
        setOrder(DONE);
        setCurretnPage(1);
    } 
    const orderAll = () => {
        setTypeOfSorted({ ...typeOfSorted, typeSortedByStatus: ALL });
        setOrder(ALL);
        setCurretnPage(1);
    } 

    return (
        <div className={style.sortPanel}>
            <MyButton onClick={orderAll}
                button={ALL} currentbutton={order}
            >All</MyButton>
            <MyButton onClick={orderDone}
                button={DONE} currentbutton={order}
            >Done</MyButton>
            <MyButton onClick={orderUndone}
                button={UNDONE} currentbutton={order}
            >Undone</MyButton>
        </div>
    )
}

export default SortByStatus;