import React, {FC} from "react";
import CalculatorComponent from "../CalculatorComponent/CalculatorComponent";
import CalculatorButton from "../CalculatorButton/CalculatorButton";

const CalculatorOperations: FC = () => {
    return (
        <CalculatorComponent>
            <div className={`grid grid-cols-4 gap-2`} id='CalculatorOperations'>
                <CalculatorButton>/</CalculatorButton>
                <CalculatorButton>X</CalculatorButton>
                <CalculatorButton>-</CalculatorButton>
                <CalculatorButton>+</CalculatorButton>
            </div>
        </CalculatorComponent>
    );
}

export default CalculatorOperations;