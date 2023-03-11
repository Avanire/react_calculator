import React, {FC} from "react";
import {useAppSelector} from "../../hooks/hooks";

const Result: FC = () => {
    const {result, display} = useAppSelector(state => state.calculatorConstructor);
    const type = useAppSelector(state => state.calculatorConstructor.type);

    return (
        <span
            className={result.length >= 10 || display.length >= 10 ? 'text-lg' : ''}>{type === 'runtime' ? result ? result : display : 0}</span>
    );
}

export default Result;