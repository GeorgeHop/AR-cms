import React from 'react';

const PageContainer = ({children, title}) => {
    return (
        <div className='container column is-10'>
            <div className='section'>
                <span className='title'>
                    {title}
                </span>
                {children}
            </div>
        </div>
    )
}

export default PageContainer;
