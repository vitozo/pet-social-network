import s from "./Paginator.module.css";
import React, {useState} from "react";

const Paginator = ({totalItemsCount, pageSize, portionSize = 10, ...props}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        // if (pages.length < 10) {
        //     pages.push(i);
        // }
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)} } >PREV</button>}

        {pages
            .filter(p => p>=leftPortionPageNumber && p<=rightPortionPageNumber)
            .map(p => {
            return <span className={props.currentPage === p && s.selectedPage}
                         key={p}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }} >NEXT</button>

        }
    </div>
};

// const Paginator = (props) => {
//
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
//
//     let pages = [];
//
//     for (let i = 1; i <= pagesCount; i++) {
//         // pages.push(i)
//         if (pages.length < 10) {
//             pages.push(i);
//         }
//     }
//
//     return <div>
//         {pages.map(p => {
//             return <span className={props.currentPage === p && s.selectedPage}
//                          onClick={(e) => {
//                              props.onPageChanged(p)
//                          }}>{p}</span>
//         })}
//     </div>
// };

export default Paginator;