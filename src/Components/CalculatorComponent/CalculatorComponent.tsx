import React, {FC, JSXElementConstructor, ReactElement, ReactNode, useCallback, useMemo} from "react";
import {useDrag} from "react-dnd";
import {renderToString} from "react-dom/server";
import {IConstructorElement} from "../../utils/types";
import {useAppSelector} from "../../hooks/hooks";

const CalculatorComponent: FC<{ children: ReactElement<JSXElementConstructor<ReactNode>> }> = ({children}) => {
    const constructorElements = useAppSelector(state => state.calculatorConstructor.constructor);

    const serializeElementFunction = useCallback((reactElement: ReactElement): IConstructorElement => {
        const serializeElement = renderToString(reactElement);

        return {
            id: reactElement.props.id,
            element: serializeElement,
            isExists: true
        };
    }, []);

    const serializeElement = serializeElementFunction(children);

    const [{isDragging}, drag, dragPreview] = useDrag({
        type: 'Component',
        item: serializeElement,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const isExists = useMemo(() => {
        return constructorElements.find(item => item.id === serializeElement.id);
    }, [constructorElements]);

    return (
        <section className={`p-1 bg-white rounded ${isExists ? 'pointer-events-none' : 'shadow-componentCalcShadow'}`}
                 ref={dragPreview}
                 style={{opacity: isDragging ? 0.4 : 1}}
        >
            <div ref={drag} className={isExists ? 'opacity-40' : ''}>{children}</div>
        </section>
    );
}

export default CalculatorComponent;