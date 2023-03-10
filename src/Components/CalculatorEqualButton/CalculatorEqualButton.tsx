import React, {FC} from "react";
import CalculatorComponent from "../CalculatorComponent/CalculatorComponent";
import CalculatorButton from "../CalculatorButton/CalculatorButton";

const CalculatorEqualButton: FC = () => {
    return (
        <CalculatorComponent>
            <span id='CalculatorEqualButton'><CalculatorButton extraClass='bg-iris-100 text-white h-16'>=</CalculatorButton></span>
        </CalculatorComponent>
    );
}

export default CalculatorEqualButton;