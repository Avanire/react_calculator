import React, {FC} from "react";
import CalculatorComponent from "../CalculatorComponent/CalculatorComponent";
import CalculatorButton from "../CalculatorButton/CalculatorButton";
import {useAppDispatch} from "../../hooks/hooks";
import {addOperator} from "../../services/actions/calculator";

const CalculatorOperations: FC = () => {
    const dispatch = useAppDispatch();

    const handleClick = (children: string) => {
        dispatch({
            type: addOperator.type,
            payload: children
        });
    }

    return (
        <CalculatorComponent>
            <div className={`grid grid-cols-4 gap-2`} id='CalculatorOperations'>
                <CalculatorButton handleClick={handleClick}>/</CalculatorButton>
                <CalculatorButton handleClick={handleClick}>X</CalculatorButton>
                <CalculatorButton handleClick={handleClick}>-</CalculatorButton>
                <CalculatorButton handleClick={handleClick}>+</CalculatorButton>
            </div>
        </CalculatorComponent>
    );
}

export default CalculatorOperations;