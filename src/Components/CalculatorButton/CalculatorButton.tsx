import React, {FC} from "react";
import {ICalculatorButton} from "../../utils/types";

const CalculatorButton: FC<ICalculatorButton> = ({children, extraClass}) => {
    return (
        <div className={`rounded-md border border-borderColor text-black text-sm font-medium h-12 flex items-center justify-center ${extraClass}`}>{children}</div>
    );
}

export default CalculatorButton;