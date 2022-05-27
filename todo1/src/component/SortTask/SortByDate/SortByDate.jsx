import React  from "react";
import MyButton from "../../Button/MyButton";
import style from './SortByDate.module.css';
import { useState } from "react";

const SortByDate = (props) => {
const [order, setOrder] = useState('first');
    
    const orderLast = () => {
        props.setTypeOfSorted({ ...props.typeOfSorted, typeSortedByDate: 'last' });
        setOrder('last');
    }

    const orderFirst = () => {
        props.setTypeOfSorted({ ...props.typeOfSorted, typeSortedByDate: 'first' });
        setOrder('first');
    }

    return (
        <div className='sortDatePanel'>
            Sort by date
            <MyButton onClick={orderLast} button={'last'} currentbutton={order}
            >⇧</MyButton>
            <MyButton onClick={orderFirst} button={'first'} currentbutton={order}
            >⇩</MyButton>
        </div>
    )
}

export default SortByDate;