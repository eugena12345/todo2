import React  from "react";
import MyButton from "../../Button/MyButton";
import { useState } from "react";

const FIRST = 'first';
const LAST = 'last';

const SortByDate = ({typeOfSorted, setTypeOfSorted, }) => {
const [order, setOrder] = useState(FIRST);
    
    const orderLast = () => {
        setTypeOfSorted({ ...typeOfSorted, typeSortedByDate: LAST });
        setOrder(LAST);
    }

    const orderFirst = () => {
        setTypeOfSorted({ ...typeOfSorted, typeSortedByDate: FIRST });
        setOrder(FIRST);
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