import React from "react";
import MyButton from "../Button/MyButton";

const Pagination = ({pageForPagination, paginate, currentPage }) => {
    let pagesArray = [];
    const pages = pageForPagination;
        for (let i = 1; i <= pages; i++) {
        pagesArray.push(i);
    }

    return (
        <div>
            <MyButton onClick={() => paginate(1)} button={'start'}
                currentbutton={currentPage}>start</MyButton>
            {pagesArray.map(number => (
                <MyButton key={number}
                    onClick={() => paginate(number)} button={number}
                    currentbutton={currentPage}>{number}</MyButton>
            ))}
            <MyButton onClick={() => paginate(pagesArray.length)} button={'end'}
                currentbutton={currentPage}>end</MyButton>
        </div>
    )
}

export default Pagination;