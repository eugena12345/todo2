import React from "react";

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