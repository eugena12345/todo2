import React from "react";

const optionSortByDone = ['All', 'Done', 'Undone']

const SortByDone = () => {
    return (
        <div className='sortPanel'>
            <button className="floating-button">All</button>
            <button className="floating-button">Done</button>
            <button className="floating-button">Undone</button>
        </div>
    )
}

export default SortByDone;