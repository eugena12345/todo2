import React from "react";
import MyButton from "../Button/MyButton";
import style from './Pagination.module.css';

const Pagination = (props) => {///
    let pagesArray = [];
    let pages = 1;
    if (props.length) {
        pages = Math.ceil(props.length / props.numberOfTaskOnPage);
    }
    for (let i = 1; i <= pages; i++) {
        pagesArray.push(i);
    }

    return (
        <div>
            {pagesArray.map(number => (
                <MyButton key={number}
                    onClick={() => props.paginate(number)} button={number}
                    currentbutton={props.currentPage}>{number}</MyButton>
            ))}
        </div>
    )
}

export default Pagination;