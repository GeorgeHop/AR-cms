import React, {useRef} from 'react';
import PageHeader from "../../components/MainLayout/PageHeader";
import DragBox from "../../components/ScenarioConstructor/DragBox";
import DragContainer from "../../components/ScenarioConstructor/DragContainer";
import Palette from "../../components/ScenarioConstructor/Palette";
import {element} from "prop-types";


const items = [
    {
        x: 123,
        y: 200,
        insidePalette: true,
        itemData: {
            id: 1,
            patchCords: [],
            title: 'Test',
        }
    },
    {
        x: 123,
        y: 200,
        insidePalette: true,
        itemData: {
            id: 2,
            patchCords: [],
            title: 'Test1',
        }
    },
    {
        x: 123,
        y: 100,
        insidePalette: true,
        itemData: {
            id: 3,
            patchCords: [],
            title: 'Test2',
        }
    },
    {
        x: 123,
        y: 200,
        insidePalette: false,
        itemData: {
            id: 4,
            patchCords: [],
            title: 'container item',
        }
    },
    {
        x: 373,
        y: 200,
        insidePalette: false,
        itemData: {
            id: 5,
            patchCords: [],
            title: 'container item two',
        }
    },
    {
        x: 623,
        y: 200,
        insidePalette: false,
        itemData: {
            id: 6,
            patchCords: [],
            title: 'container item two',
        }
    },
    {
        x: 873,
        y: 200,
        insidePalette: false,
        itemData: {
            id: 7,
            patchCords: [],
            title: 'container item two',
        }
    },
];

const ScenarioConstructor = () => {
    const paletteRef = useRef(null);
    const containerRef = useRef(null);

    const [isPalette, setIsPalette] = React.useState(null);
    const [mouseTop, setMouseTop] = React.useState(0);
    const [mouseLeft, setMouseLeft] = React.useState(0);

    const [data, setData] = React.useState(items || []);
    const [coords, setCoords] = React.useState([]);



    const [patchCord, setPatchCord] = React.useState(false);

    React.useEffect(() => {
        const onClickInside = event => {
            if (paletteRef.current && paletteRef.current.contains(event.target)) {
                setIsPalette(true);
            } else {
                setIsPalette(false);
            }
        }
        document.addEventListener('mousedown', onClickInside);
    },[paletteRef]);

    const handleMouseMove = e => {
        setMouseTop(e.clientY);
        setMouseLeft(e.clientX);
    }

    const onDragOver = event => {
        event.preventDefault();
    }

    const onDrop = event => {
        const id = event.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        const dropzone = event.target;
        dropzone.appendChild(draggableElement);
        event.dataTransfer.clearData();
    }

    const lineDraw = (ax,ay,bx,by) =>
    {
        if(ay>by)
        {
            bx=ax+bx;
            ax=bx-ax;
            bx=bx-ax;
            by=ay+by;
            ay=by-ay;
            by=by-ay;
        }
        let calc = Math.atan((ay-by)/(bx-ax));
        calc = calc*180/Math.PI;
        let length = Math.sqrt((ax-bx)*(ax-bx)+(ay-by)*(ay-by));
        document.body.innerHTML += "<div id='line' style='height:" + length + "px;" +
            "width:3px;" +
            "background-color:black;" +
            "position:absolute;" +
            "top:" + (ay) + "px;" +
            "left:" + (ax) + "px;" +
            "transform:rotate(" + calc + "deg);" +
            "-ms-transform:rotate(" + calc + "deg);" +
            "transform-origin:0% 0%;" +
            "-moz-transform:rotate(" + calc + "deg);" +
            "-moz-transform-origin:0% 0%;" +
            "-webkit-transform:rotate(" + calc  + "deg);" +
            "-webkit-transform-origin:0% 0%;" +
            "-o-transform:rotate(" + calc + "deg);" +
            "-o-transform-origin:0% 0%;'></div>"
    }

    const drawLine = (event) => {
        console.log(event.target.id, event.clientY, event.clientX)






        // items.forEach((element) => {
        //     if (id === element.itemData.id) {
        //         element.itemData.patchCords.push({
        //             [element.itemData.id + 'x']: event.clientX,
        //             [element.itemData.id + 'y']: event.clientY
        //         });
        //     }
        // });
    }

    return (
        <>
            <PageHeader title={'Scenario Constructor'}/>
            <div style={{display: 'flex'}}>
                <DragContainer
                    containerRef={containerRef}
                    onMouseMove={handleMouseMove}
                    onDragOver={event => onDragOver(event)}
                    onDrop={event => onDrop(event)}
                >
                    {console.log(data)}
                    {data.map((item, index) => (
                        !item.insidePalette && (
                            <DragBox
                                key={item.itemData.id}
                                id={`dragBox${item.itemData.id}`}
                                draggable={isPalette}
                                isPalette={isPalette}
                                clickTop={mouseTop}
                                clickLeft={mouseLeft}
                                defaultTop={item.y || 0}
                                defaultLeft={item.x || 0}
                                createLineOnClick={() => lineDraw(100, 150, 300, 450)}
                            >
                                {item.itemData.title}
                            </DragBox>
                        )
                    ))}
                </DragContainer>
                <Palette
                    paletteRef={paletteRef}
                    onMouseMove={handleMouseMove}
                >
                    {data.map((item, index) => (
                        item.insidePalette && (
                            <DragBox
                                key={item.itemData.id}
                                id={`dragBox${item.itemData.id}`}
                                draggable={isPalette}
                                isPalette={isPalette}
                                clickTop={mouseTop}
                                clickLeft={mouseLeft}
                                defaultTop={item.y || 0}
                                defaultLeft={item.x || 0}
                                createLineOnClick={() => lineDraw(100, 150, 300, 450)}
                            >
                                {item.itemData.title}
                            </DragBox>
                        )
                    ))}
                </Palette>
            </div>
        </>
    )
}

export default ScenarioConstructor;
