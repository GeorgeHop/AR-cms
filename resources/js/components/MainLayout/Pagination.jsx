import React from 'react';

const Pagination = ({currentPage, lastPage, pageChange}) => {
    const pages = React.useMemo(() => {
        let pages = [];
        let i = 1;

        while (i <= lastPage) {
            pages.push({
                page: i,
            });
            i++;
        }

        return pages;
    }, []);


    return (
        <nav>
            <ul className='pagination'>
                {pages.map((item, index) => (
                    <li key={index} className={`page-item ${item.page === currentPage && 'disabled'}`}>
                        <button className='page-link' onClick={() => pageChange(item.page)}>{item.page}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
