import React, {FC, ReactElement} from "react";

const CalculatorComponent: FC<{children: ReactElement}> = ({children}) => {
    return (
        <section className={`p-1 bg-white rounded shadow-componentCalcShadow`}>
            {children}
        </section>
    );
}

export default CalculatorComponent;