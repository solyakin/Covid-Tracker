import React from 'react';
import '../pagination/paginating.css';

const Paginating = ({postPerPage, totalPost, nextPage}) =>{
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPost/postPerPage); i++){
        pageNumber.push(i)
    }
    return(
        <div>
           <nav>
               
               <ul className="pagination">
                <p>Prev</p>
                   {
                       pageNumber.map(number => (
                           <li key={number.id} className="page-item">
                               <a onClick={()=>nextPage(number)} href="!#" className="page-link">
                                   {number}
                               </a>
                           </li>
                       ))
                   }
               <p>Next</p>
               </ul>
            </nav>  
        </div>
    )
}

export default Paginating;