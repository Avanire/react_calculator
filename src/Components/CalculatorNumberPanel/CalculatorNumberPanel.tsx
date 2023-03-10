import React, {FC} from "react";
import CalculatorComponent from "../CalculatorComponent/CalculatorComponent";
import CalculatorButton from "../CalculatorButton/CalculatorButton";

const CalculatorNumberPanel: FC = () => {
    return (
        <CalculatorComponent>
            <div className={`grid grid-cols-3 gap-2`} id='CalculatorNumberPanel'>
                <CalculatorButton>7</CalculatorButton>
                <CalculatorButton>8</CalculatorButton>
                <CalculatorButton>9</CalculatorButton>
                <CalculatorButton>4</CalculatorButton>
                <CalculatorButton>5</CalculatorButton>
                <CalculatorButton>6</CalculatorButton>
                <CalculatorButton>1</CalculatorButton>
                <CalculatorButton>2</CalculatorButton>
                <CalculatorButton>3</CalculatorButton>
                <CalculatorButton extraClass='col-span-2'>0</CalculatorButton>
                <CalculatorButton>,</CalculatorButton>
            </div>
        </CalculatorComponent>
    );
}

export default CalculatorNumberPanel;