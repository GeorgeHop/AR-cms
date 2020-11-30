import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";

const PageContainer = ({children, title}) => {
    return (
        <div className='main-content columns main-content-custom'>
            <Header/>
            <Sidebar/>
            <div className='container column is-10'>
                <div className='section'>
                    <span className='title'>
                        {title}
                    </span>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PageContainer;
