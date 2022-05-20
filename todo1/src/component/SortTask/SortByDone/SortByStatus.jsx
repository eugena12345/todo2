import React from "react";
import MyButton from "../../Button/MyButton";
import style from './SortByStatus.module.css';

const optionSortByDone = ['All', 'Done', 'Undone']


const SortByStatus = (props) => {

    const sortByStatus = (taskList, typeOfSort) => {
        if (typeOfSort === 'done') {
            props.setFiltredTodoList(taskList.filter(item => item.isCompleted === true));
        } else if (typeOfSort === 'undone') {
            props.setFiltredTodoList(taskList.filter(item => item.isCompleted === false));
        } else if (typeOfSort === 'all') {
            props.setFiltredTodoList(taskList)}
        
        //return console.log(copyTaskList);
    }

    return (
        <div className={style.sortPanel}>
            <MyButton onClick={() => sortByStatus(props.taskList, 'all')}>All</MyButton>
            <MyButton onClick={() => sortByStatus(props.taskList, 'done')}>Done</MyButton>
            <MyButton onClick={() => sortByStatus(props.taskList, 'undone')}>Undone</MyButton>
        </div>
    )
}

export default SortByStatus;