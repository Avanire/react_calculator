import {createReducer} from "@reduxjs/toolkit";
import {addCalcPart} from "../actions/calculator";
import {ICalculatorConstructor} from "../../utils/types";

const initialState: ICalculatorConstructor = {
    constructor: []
};

export const calculatorConstructor = createReducer(initialState, (builder) => {
    builder
        .addCase(addCalcPart, (state, action) => {
            const isExists = state.constructor.find(item => item.id === action.payload.id);

            if (isExists) {
                return state;
            }

            return {
                constructor: [...state.constructor, action.payload]
            }
        });
});