import React from 'react';

const Palette = ({children, onMouseMove, paletteRef}) => {

    return (
        <div
            ref={paletteRef}
            className='palette'
            onMouseMove={onMouseMove}
        >
            <div className='palette-header'>
                <input className='palette-input' placeholder={'Search'}/>
                <button className='palette-button'>+</button>
            </div>
            <div
                id='palette'
                className='palette-inner'
            >
                {children}
            </div>
        </div>
    );
}

export default Palette;
