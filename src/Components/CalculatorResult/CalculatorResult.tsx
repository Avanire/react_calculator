import React, {FC} from "react";
import CalculatorComponent from "../CalculatorComponent/CalculatorComponent";
import Result from "../Result/Result";

const CalculatorResult: FC = () => {
    return (
        <CalculatorComponent>
            <div className={`bg-gray-100 rounded-md py-1 px-2 text-4xl font-extrabold text-gray-900 text-right`}
                 id='CalculatorResult'>
                <Result/>
            </div>
        </CalculatorComponent>
    );
}

export default CalculatorResult;