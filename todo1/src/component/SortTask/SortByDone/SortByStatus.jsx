import React, { useState } from "react";
import MyButton from "../../Button/MyButton";
import style from './SortByStatus.module.css';

const ALL = 'all';
const DONE = 'done';
const UNDONE = 'undone';

const SortByStatus = (props) => {
    const [order, setOrder] = useState(ALL);

    const orderUndone = () => {
        props.setTypeOfSorted({ ...props.typeOfSorted, typeSortedByStatus: UNDONE })
        setOrder(UNDONE);
    };
    const orderDone = () => {
        props.setTypeOfSorted({ ...props.typeOfSorted, typeSortedByStatus: DONE });
        setOrder(DONE);
        props.setCurretnPage(1);
    } 
    const orderAll = () => {
        props.setTypeOfSorted({ ...props.typeOfSorted, typeSortedByStatus: ALL });
        setOrder(ALL);
        props.setCurretnPage(1);
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