import React from 'react';

const Pagination = () => {

    let pages = [1,2,3,4,5,6];

    return (
        <ul className='Pagination'>
            {pages.map((page,index) => (
                <li className='page-item' key={index}>{page}</li>
            ))}
        </ul>
    )   
};
export default Pagination;
