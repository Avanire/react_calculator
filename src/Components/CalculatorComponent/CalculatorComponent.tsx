import React, {FC, ReactElement} from "react";
import {useDrag} from "react-dnd";

const CalculatorComponent: FC<{children: ReactElement}> = ({children}) => {
    const [{isDragging}, drag, dragPreview] = useDrag({
        type: 'Component',
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    return (
        <section className={`p-1 bg-white rounded shadow-componentCalcShadow`} ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1}}>
            <div ref={drag}>{children}</div>
        </section>
    );
}

export default CalculatorComponent;