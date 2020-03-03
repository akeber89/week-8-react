import React from 'react';

const Pagination = () => {

    let pages = [1,2,3,4,5,6];

    return (
        <ul className='pagination'>
            {pages.map((page,index) => (
                <li className='page-item' key={index}><a className="page-link">{page}</a></li>
            ))}
        </ul>
    )   
};
export default Pagination;
