import React  from "react";
import MyButton from "../../Button/MyButton";
import style from './SortByDate.module.css';
import { useState } from "react";

const SortByDate = (props) => {
const [order, setOrder] = useState('first');
    const sortByDate = (taskList, order) => {
        if (order === 'first') {
            setOrder('first');
            props.setTaskList([...taskList].sort((a, b) => a.miliTaskDate - b.miliTaskDate));
        } else if (order === 'last') {
            setOrder('last');
            props.setTaskList([...taskList].sort((a, b) => b.miliTaskDate - a.miliTaskDate));
        }
    }

    return (
        <div className='sortDatePanel'>
            Sort by date
            <MyButton onClick={() => sortByDate(props.taskList, 'last')}
                button={'last'} currentbutton={order}
            >⇧</MyButton>
            <MyButton onClick={() => sortByDate(props.taskList, 'first')}
            button={'first'} currentbutton={order}
            >⇩</MyButton>
        </div>
    )
}

export default SortByDate;