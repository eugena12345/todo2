import React, { useState } from "react";
import MyButton from "../../Button/MyButton";
import style from './SortByStatus.module.css';

const SortByStatus = (props) => {
    const [order, setOrder] = useState('all');

    const sortByStatus = (taskList, typeOfSort) => {
        if (typeOfSort === 'done') {
            setOrder('done');
            props.setFiltredTodoList(taskList.filter(item => item.isCompleted === true));
            props.setSortedByStatus(true);
        } else if (typeOfSort === 'undone') {
            setOrder('undone');
            props.setFiltredTodoList(taskList.filter(item => item.isCompleted === false));
            props.setSortedByStatus(true);
        } else if (typeOfSort === 'all') {
            setOrder('all');
            props.setFiltredTodoList(taskList)
            props.setSortedByStatus(false);
        }
        
        props.setCurretnPage(1);
    }

    return (
        <div className={style.sortPanel}>
            <MyButton onClick={() => sortByStatus(props.taskList, 'all')}
                button={'all'} currentbutton={order}
            >All</MyButton>
            <MyButton onClick={() => sortByStatus(props.taskList, 'done')}
                button={'done'} currentbutton={order}
            >Done</MyButton>
            <MyButton onClick={() => sortByStatus(props.taskList, 'undone')}
                button={'undone'} currentbutton={order}
            >Undone</MyButton>
        </div>
    )
}

export default SortByStatus;