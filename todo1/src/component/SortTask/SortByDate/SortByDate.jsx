import React from "react";
import style from './SortByDate.module.css';

const SortByDate = (props) => {
    return (
        <div className='sortDatePanel'>
            Sort by date
            <button className="floating-button">⇧</button>
            <button className="floating-button">⇩</button>
        </div>
    )
}

export default SortByDate;