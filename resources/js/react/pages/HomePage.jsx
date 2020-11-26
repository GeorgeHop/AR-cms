import React from 'react';


const HomePage = () => {
    return (
        <div className='tile is-ancestor'>
            <div className='tile is-4 is-vertical is-parent'>
                <div className='tile is-child box'>
                    One
                </div>
                <div className='tile is-child box'>
                    One
                </div>
            </div>
            <div className='tile is-parent'>
                <div className='tile is-child box'>
                    One
                </div>
            </div>
        </div>
    )
}

export default HomePage;
