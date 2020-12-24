import React from 'react';

const DragContainer = ({onMouseMove, children, onDrop, onDragOver, containerRef}) => {
    return (
        <div
            id='dragContainer'
            ref={containerRef}
            className='drag-container'
            onMouseMove={onMouseMove}
            onDrop={onDrop}
            onDragOver={onDragOver}
        >
            {children}
        </div>
    )
}

export default DragContainer;
