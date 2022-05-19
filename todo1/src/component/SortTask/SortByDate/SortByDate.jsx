import React from "react";
import MyButton from "../../Button/MyButton";
import style from './SortByDate.module.css';

const SortByDate = (props) => {
    return (
        <div className='sortDatePanel'>
            Sort by date
            <MyButton>⇧</MyButton> 
            <MyButton>⇩</MyButton> 
        </div>
    )
}

export default SortByDate;