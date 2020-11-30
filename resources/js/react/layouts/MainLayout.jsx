import React from 'react';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const MainLayout = ({children, title, appName}) => {
    return (
        <>
            <Header name={appName}/>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <main role="main" className="col-sm-9 ml-sm-auto col-md-10 main">
                        <h4 className='m-1'>{title}</h4>
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default MainLayout;
