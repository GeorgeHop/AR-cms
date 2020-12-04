import React from 'react';

const DragBox = props => {
    const [isMoving, setIsMoving] = React.useState(false);
    const [top, setTop] = React.useState(0);
    const [left, setLeft] = React.useState(0);
    const [originTop, setOriginTop] = React.useState(0);
    const [originLeft, setOriginLeft] = React.useState(0);
    const [clickTop, setClickTop] = React.useState(0);
    const [clickLeft, setClickLeft] = React.useState(0);
    const [zIndex, setZIndex] = React.useState(0);
    const [containerWidth, setContainerWidth] = React.useState(0);
    const [containerHeight, setContainerHeight] = React.useState(0);
    let draggableElement = document.getElementById('dragBox');
    let container = document.getElementById('dragContainer');

    React.useEffect(() => {
        if (!!container) {
            let position = container.getBoundingClientRect();

            setContainerHeight(position.height);
            setContainerWidth(position.width);
        }
    },[container]);

    const startMove = e => {
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

    const endMouseMove = () => {
        setIsMoving(false);
        setZIndex(1);
    }

    return (
        <div
            id='dragBox'
            className={`drag-box ${!isMoving && 'drag-box-dropped'}`}
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
            {props.children}
        </div>
    )
}

export default DragBox;
