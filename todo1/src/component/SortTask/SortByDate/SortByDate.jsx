import React from "react";
import Button from "../../Button/Button";
import style from './SortByDate.module.css';

const SortByDate = (props) => {
    return (
        <div className='sortDatePanel'>
            Sort by date
            <Button buttonText={'⇧'} />
            <Button buttonText={'⇩'} />
        </div>
    )
}

export default SortByDate;