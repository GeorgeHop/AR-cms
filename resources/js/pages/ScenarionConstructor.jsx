import React from 'react';
import PageHeader from "../components/MainLayout/PageHeader";
import DragBox from "../components/ScenarioConstructor/DragBox";
import DragContainer from "../components/ScenarioConstructor/DragContainer";

const ScenarioConstructor = () => {
    const [mouseTop, setMouseTop] = React.useState(0);
    const [mouseLeft, setMouseLeft] = React.useState(0);

    const handleMouseMove = e => {
        setMouseTop(e.clientY);
        setMouseLeft(e.clientX);
    }

    const elements = [
        {
            children: 'lol'
        },
        {
            children: 'kek'
        },
    ];

    return (
        <>
            <PageHeader title={'Scenario Constructor'}/>
            <DragContainer
                onMouseMove={handleMouseMove}
            >
                {elements.map((item, index) => (
                    <DragBox
                        key={index}
                        clickTop={mouseTop}
                        clickLeft={mouseLeft}
                    >
                        {item.children}
                    </DragBox>
                ))}
            </DragContainer>
        </>
    )
}

export default ScenarioConstructor;
