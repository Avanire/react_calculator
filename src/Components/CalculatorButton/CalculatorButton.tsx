import React, {FC} from "react";
import {ICalculatorButton} from "../../utils/types";
import {useAppSelector} from "../../hooks/hooks";

const CalculatorButton: FC<ICalculatorButton> = ({children, extraClass, handleClick}) => {
    const calcType = useAppSelector(state => state.calculatorConstructor.type);

    return (
        calcType === 'runtime' ? (
            <button className={`rounded-md border border-borderColor text-black text-sm font-medium h-12 flex items-center justify-center ${extraClass} active:border-iris-100 active:border-2`}
                    onClick={() => handleClick(children)}>{children}</button>
        ) : (
            <div
                className={`rounded-md border border-borderColor text-black text-sm font-medium h-12 flex items-center justify-center ${extraClass}`}>{children}</div>
        )
    );
}

export default CalculatorButton;