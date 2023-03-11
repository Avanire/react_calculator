import React, {FC} from "react";
import CalculatorComponent from "../CalculatorComponent/CalculatorComponent";

const CalculatorEqualButton: FC = () => {
    return (
        <CalculatorComponent>
            <div id='CalculatorEqualButton' className={`rounded-md border border-borderColor text-black text-sm font-medium h-12 flex items-center justify-center bg-iris-100 text-white h-16`}>=</div>
        </CalculatorComponent>
    );
}

export default CalculatorEqualButton;