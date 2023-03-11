import React, {createElement, FC} from "react";
import {useAppSelector} from "../../hooks/hooks";

const Calculator: FC = () => {
    const calculatorComponents = useAppSelector(state => state.calculatorConstructor.constructor);

    return (
        <section className={`flex flex-col space-y-3`}>
            {calculatorComponents.map(item => <div
                key={item.id}>{createElement(item.element.type, item.element.props)}</div>)}
        </section>
    );
}

export default Calculator;