import React from "react";
import MyButton from "../../Button/MyButton";
import style from './SortByDate.module.css';

const SortByDate = (props) => {

    const sortByDate = (taskList, order) => {
        if (order === 'first') {
            props.setFiltredTodoList([...taskList].sort((a, b) => a.miliTaskDate - b.miliTaskDate));
        } else if (order === 'last') {
            props.setFiltredTodoList([...taskList].sort((a, b) => b.miliTaskDate - a.miliTaskDate));
        }
    }

    return (
        <div className='sortDatePanel'>
            Sort by date
            <MyButton onClick={() => sortByDate(props.taskList, 'last')}>⇧</MyButton>
            <MyButton onClick={() => sortByDate(props.taskList, 'first')}>⇩</MyButton>
        </div>
    )
}

export default SortByDate;