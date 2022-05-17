import React from "react";
import SortByDate from "./SortByDate/SortByDate";
import SortByDone from "./SortByDone/SortByDone";

const someFunction = () => {
    console.log('Click Add Task')
}

const SortTask = (props) => {
    return (
        <div className='controlPanel'>
            <SortByDone />
            <SortByDate />
        </div>
    )
};

export default SortTask;