import React from 'react';

const DragContainer = ({onMouseMove, children}) => {
    return (
        <div
            id='dragContainer'
            className='drag-container'
            onMouseMove={onMouseMove}
        >

            {children}
        </div>
    )
}

export default DragContainer;
