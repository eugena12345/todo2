import React from "react";
import Button from "../../Button/Button";
import style from './SortByDate.module.css';

const SortByDate = (props) => {
    return (
        <div className='sortDatePanel'>
            Sort by date
            <Button>⇧</Button> 
            <Button>⇩</Button> 
        </div>
    )
}

export default SortByDate;