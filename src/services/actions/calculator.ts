import {createAction} from "@reduxjs/toolkit";
import {
    ADD_CALC_PART,
    ADD_NUMBER,
    ADD_OPERATOR,
    CHANGE_CALC_TYPE,
    CHANGE_POSITION_CALC_ELEM, PRESS_EQUAL_BUTTON, REMOVE_CALC_PART
} from "../../utils/constans";
import {IConstructorElement, IPositionChangeObj} from "../../utils/types";

export const addCalcPart = createAction<IConstructorElement, typeof ADD_CALC_PART>(ADD_CALC_PART);
export const changePositionCalcElem = createAction<IPositionChangeObj, typeof CHANGE_POSITION_CALC_ELEM>(CHANGE_POSITION_CALC_ELEM);
export const removeCalcPart = createAction<string, typeof REMOVE_CALC_PART>(REMOVE_CALC_PART);

export const changeCalcType = createAction<string, typeof CHANGE_CALC_TYPE>(CHANGE_CALC_TYPE);

export const addNumber = createAction<string, typeof ADD_NUMBER>(ADD_NUMBER);
export const addOperator = createAction<string, typeof ADD_OPERATOR>(ADD_OPERATOR);
export const pressEqualButton = createAction<typeof PRESS_EQUAL_BUTTON>(PRESS_EQUAL_BUTTON);