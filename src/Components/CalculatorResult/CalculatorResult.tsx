import React, {FC, useState} from "react";
import CalculatorComponent from "../CalculatorComponent/CalculatorComponent";

const CalculatorResult: FC = () => {
    const [result, setResult] = useState<number>(0);

    return (
        <CalculatorComponent>
            <div className={`bg-gray-100 rounded-md py-1 px-2 text-4xl font-extrabold text-gray-900 text-right`}>
                {result}
            </div>
        </CalculatorComponent>
    );
}

export default CalculatorResult;