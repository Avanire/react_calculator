import {createReducer} from "@reduxjs/toolkit";
import {
    addCalcPart,
    addNumber,
    addOperator,
    changeCalcType,
    changePositionCalcElem,
    pressEqualButton, removeCalcPart
} from "../actions/calculator";
import {ICalculatorConstructor} from "../../utils/types";
import {calculatorFunction, roundNumber} from "../../utils/utils";

const initialState: ICalculatorConstructor = {
    constructor: [],
    type: 'constructor',
    firstNumber: 0,
    operator: '',
    result: '',
    display: '0'
};

export const calculatorConstructor = createReducer(initialState, (builder) => {
    builder
        .addCase(addCalcPart, (state, action) => {
            const isExists = state.constructor.find(item => item.id === action.payload.id);
            const displayElement = action.payload.id === 'CalculatorResult';

            if (isExists) {
                return state;
            }

            if (displayElement) {
                return {
                    ...state,
                    constructor: [action.payload, ...state.constructor]
                }
            }

            return {
                ...state,
                constructor: [...state.constructor, action.payload]
            }
        })
        .addCase(removeCalcPart, (state, action) => {
            return {
                ...state,
                constructor: state.constructor.filter(item => item.id !== action.payload)
            }
        })
        .addCase(changePositionCalcElem, (state, action) => {
            const newConstructor = [...state.constructor];
            const dragCard = newConstructor[action.payload.dragIndex];

            newConstructor.splice(action.payload.dragIndex, 1);
            newConstructor.splice(action.payload.hoverIndex === 0 ? 1 : action.payload.hoverIndex, 0, dragCard);

            return {
                ...state,
                constructor: newConstructor
            }
        })
        .addCase(changeCalcType, (state, action) => {
            return {
                ...state,
                type: action.payload
            }
        })
        .addCase(addNumber, (state, action) => {
            if (state.display.length === 16) {
                return;
            }

            return {
                ...state,
                result: '',
                display: state.display === '0' ? action.payload : state.display.concat(action.payload)
            }
        })
        .addCase(addOperator, (state, action) => {
            if (state.operator === '' && state.display !== '0') {
                return {
                    ...state,
                    operator: action.payload,
                    firstNumber: parseFloat(state.display.replace(',', '.')),
                    result: (state.display).replace('.', ','),
                    display: '0'
                }
            } else if (state.operator !== '' && state.firstNumber !== 0) {
                const secondNumber = parseFloat(state.display.replace(',', '.'));
                const resultNumber = calculatorFunction(state.firstNumber, secondNumber, state.operator);
                const answer = typeof resultNumber === 'number' ? roundNumber(resultNumber, 8) : 0;

                return {
                    ...state,
                    operator: '',
                    firstNumber: 0,
                    result: (answer + '').replace('.', ','),
                    display: '0'
                }
            }
        })
        .addCase(pressEqualButton, (state) => {
            if (state.operator !== '' && state.firstNumber !== 0) {
                const secondNumber = parseFloat(state.display.replace(',', '.'));
                const resultNumber = calculatorFunction(state.firstNumber, secondNumber, state.operator);
                const answer = typeof resultNumber === 'number' ? roundNumber(resultNumber, 8) : 0;

                return {
                    ...state,
                    operator: '',
                    firstNumber: 0,
                    result: (answer + '').replace('.', ','),
                    display: '0'
                }
            }
        });
});