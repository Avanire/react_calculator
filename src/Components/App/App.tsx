import React from 'react';
import ControlPanel from "../ControlPanel/ControlPanel";
import CalculatorResult from "../CalculatorResult/CalculatorResult";
import CalculatorOperations from "../CalculatorOperations/CalculatorOperations";
import CalculatorNumberPanel from "../CalculatorNumberPanel/CalculatorNumberPanel";
import CalculatorEqualButton from "../CalculatorEqualButton/CalculatorEqualButton";
import DragArea from "../DragArea/DragArea";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useAppSelector} from "../../hooks/hooks";
import Calculator from "../Calculator/Calculator";

function App() {
    const calcType = useAppSelector(state => state.calculatorConstructor.type);

    return (
        <main className={`w-[33.7rem] mx-auto mt-10`}>
            <div className={`mb-[1.875rem]`}><ControlPanel/></div>
            {
                calcType === 'constructor' ? (
                    <DndProvider backend={HTML5Backend}>
                        <section className={`grid grid-cols-2 gap-x-[3.75rem]`}>
                            <div className={`flex flex-col space-y-3`}>
                                <CalculatorResult/>
                                <CalculatorOperations/>
                                <CalculatorNumberPanel/>
                                <CalculatorEqualButton/>
                            </div>
                            <DragArea/>
                        </section>
                    </DndProvider>
                ) : (
                    <section className={`grid grid-cols-2 gap-x-[3.75rem]`}>
                        <div></div>
                        <Calculator />
                    </section>
                )
            }

        </main>
    );
}

export default App;
