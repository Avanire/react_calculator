import {createReducer} from "@reduxjs/toolkit";
import {addCalcPart} from "../actions/calculator";

export interface ICalculatorConstructor {
    readonly constructor: Array<string>;
}

const initialState: ICalculatorConstructor = {
    constructor: []
};

export const calculatorConstructor = createReducer(initialState, (builder) => {
    builder
        .addCase(addCalcPart, (state, action) => {

            return {
                constructor: [...state.constructor, action.payload]
            }
        });
});