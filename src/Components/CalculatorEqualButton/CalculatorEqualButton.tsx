import React, {FC} from "react";
import CalculatorComponent from "../CalculatorComponent/CalculatorComponent";
import CalculatorButton from "../CalculatorButton/CalculatorButton";
import {useAppDispatch} from "../../hooks/hooks";
import {pressEqualButton} from "../../services/actions/calculator";

const CalculatorEqualButton: FC = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch({
            type: pressEqualButton.type
        });
    }

    return (
        <CalculatorComponent>
            <div id='CalculatorEqualButton'>
                <CalculatorButton handleClick={handleClick} extraClass='bg-iris-100 text-white h-16 w-full'>=</CalculatorButton>
            </div>
        </CalculatorComponent>
    );
}

export default CalculatorEqualButton;