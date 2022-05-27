import React, { useState } from "react";
import MyButton from "../../Button/MyButton";
import style from './SortByStatus.module.css';

const SortByStatus = (props) => {
    const [order, setOrder] = useState('all');

    const orderUndone = () => {
        props.setTypeOfSorted({ ...props.typeOfSorted, typeSortedByStatus: 'undone' })
        setOrder('undone');
    };
    const orderDone = () => {
        props.setTypeOfSorted({ ...props.typeOfSorted, typeSortedByStatus: 'done' });
        setOrder('done');
        props.setCurretnPage(1);
    } 
    const orderAll = () => {
        props.setTypeOfSorted({ ...props.typeOfSorted, typeSortedByStatus: 'all' });
        setOrder('all');
        props.setCurretnPage(1);
    } 

    return (
        <div className={style.sortPanel}>
            <MyButton onClick={orderAll}
                button={'all'} currentbutton={order}
            >All</MyButton>
            <MyButton onClick={orderDone}
                button={'done'} currentbutton={order}
            >Done</MyButton>
            <MyButton onClick={orderUndone}
                button={'undone'} currentbutton={order}
            >Undone</MyButton>
        </div>
    )
}

export default SortByStatus;