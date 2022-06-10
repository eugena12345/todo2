import React  from "react";
import MyButton from "../../Button/MyButton";
import { useState } from "react";

const FIRST = 'asc';
const LAST = 'desc';

const SortByDate = ({typeOfSorted, setTypeOfSorted, getSortByDateTaskList}) => {
const [order, setOrder] = useState(FIRST);
    
    const orderLast = () => {
        setTypeOfSorted({ ...typeOfSorted, typeSortedByDate: LAST });
        setOrder(LAST);
        getSortByDateTaskList(LAST);
    }

    const orderFirst = () => {
        setTypeOfSorted({ ...typeOfSorted, typeSortedByDate: FIRST });
        setOrder(FIRST);
        getSortByDateTaskList(FIRST);
    }

    return (
        <div className='sortDatePanel'>
            Sort by date
            <MyButton onClick={orderLast} button={LAST} currentbutton={order}
            >⇧</MyButton>
            <MyButton onClick={orderFirst} button={FIRST} currentbutton={order}
            >⇩</MyButton>
        </div>
    )
}

export default SortByDate;