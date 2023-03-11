import React, {FC} from "react";
import CalculatorComponent from "../CalculatorComponent/CalculatorComponent";
import CalculatorButton from "../CalculatorButton/CalculatorButton";
import {useAppDispatch} from "../../hooks/hooks";
import {addNumber} from "../../services/actions/calculator";

const CalculatorNumberPanel: FC = () => {
    const dispatch = useAppDispatch();

    const handleClick = (children: string) => {
        dispatch({
            type: addNumber.type,
            payload: children
        })
    }

    return (
        <CalculatorComponent>
            <div className={`grid grid-cols-3 gap-2`} id='CalculatorNumberPanel'>
                <CalculatorButton handleClick={handleClick}>7</CalculatorButton>
                <CalculatorButton handleClick={handleClick}>8</CalculatorButton>
                <CalculatorButton handleClick={handleClick}>9</CalculatorButton>
                <CalculatorButton handleClick={handleClick}>4</CalculatorButton>
                <CalculatorButton handleClick={handleClick}>5</CalculatorButton>
                <CalculatorButton handleClick={handleClick}>6</CalculatorButton>
                <CalculatorButton handleClick={handleClick}>1</CalculatorButton>
                <CalculatorButton handleClick={handleClick}>2</CalculatorButton>
                <CalculatorButton handleClick={handleClick}>3</CalculatorButton>
                <CalculatorButton handleClick={handleClick} extraClass='col-span-2'>0</CalculatorButton>
                <CalculatorButton handleClick={handleClick}>,</CalculatorButton>
            </div>
        </CalculatorComponent>
    );
}

export default CalculatorNumberPanel;