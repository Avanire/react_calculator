import {createReducer} from "@reduxjs/toolkit";
import {addCalcPart, changePositionCalcElem} from "../actions/calculator";
import {ICalculatorConstructor} from "../../utils/types";

const initialState: ICalculatorConstructor = {
    constructor: []
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
                    constructor: [action.payload, ...state.constructor]
                }
            }

            return {
                constructor: [...state.constructor, action.payload]
            }
        })
        .addCase(changePositionCalcElem, (state, action) => {
            const newConstructor = [...state.constructor];
            const dragCard = newConstructor[action.payload.dragIndex];

            newConstructor.splice(action.payload.dragIndex, 1);
            newConstructor.splice(action.payload.hoverIndex === 0 ? 1 : action.payload.hoverIndex, 0, dragCard);

            return {
                constructor: newConstructor
            }
        });
});