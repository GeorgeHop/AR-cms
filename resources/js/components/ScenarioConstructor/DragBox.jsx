import React from 'react';

const DragBox = props => {
    const [isMoving, setIsMoving] = React.useState(false);
    const [top, setTop] = React.useState(props.defaultTop || 0);
    const [left, setLeft] = React.useState(props.defaultLeft || 0);
    const [originTop, setOriginTop] = React.useState(0);
    const [originLeft, setOriginLeft] = React.useState(0);
    const [clickTop, setClickTop] = React.useState(props.clickTop);
    const [clickLeft, setClickLeft] = React.useState(props.clickLeft);
    const [zIndex, setZIndex] = React.useState(0);
    const [containerWidth, setContainerWidth] = React.useState(0);
    const [containerHeight, setContainerHeight] = React.useState(0);
    let container = document.getElementById('dragContainer');

    React.useEffect(() => {
        if (!!container) {
            let position = container.getBoundingClientRect();
            setContainerHeight(position.height);
            setContainerWidth(position.width);
        }
    },[container]);

    const startMove = () => {
        setIsMoving(true);
        setOriginTop(top);
        setOriginLeft(left);
        setClickTop(props.clickTop);
        setClickLeft(props.clickLeft);
        setZIndex(2);
    }

    const isMove = e => {
        if (isMoving && e.clientY <= containerWidth) {
            e.preventDefault();
            setTop(originTop + (e.clientY - clickTop));
            setLeft(originLeft + (e.clientX - clickLeft));
        }
    }

    const onDragStart = event => {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    const endMouseMove = () => {
        setIsMoving(false);
        setZIndex(1);
    }

    return (
        <div
            id={props.id}
            draggable={props.draggable}
            onDragStart={props.isPalette ? onDragStart : null}
            className={`drag-box ${props.extraClasses || ''} ${!isMoving && 'drag-box-dropped'}`}
            onMouseDown={startMove}
            onMouseMove={isMove}
            onMouseUp={endMouseMove}
            onMouseLeave={endMouseMove}
            style={{
                top: `${top}px`,
                left: `${left}px`,
                zIndex: `${zIndex}`
            }}
        >
            <div id='lines' className='lines'/>
            <span id={`cord-one-${props.id}`} onClick={(e) => props.createLineOnClick(e.clientX, e.clientY)} className='create-line-btn one'/>
            <span id={`cord-two-${props.id}`} onClick={(e) => props.createLineOnClick(e.clientX, e.clientY)} className='create-line-btn two'/>
            <span id={`cord-three-${props.id}`} onClick={(e) => props.createLineOnClick(e.clientX, e.clientY)} className='create-line-btn three'/>
            <span id={`cord-four-${props.id}`} onClick={(e) => props.createLineOnClick(e.clientX, e.clientY)} className='create-line-btn four'/>
            {props.children}
        </div>
    )
}

export default DragBox;
