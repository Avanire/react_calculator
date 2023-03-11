import {createAction} from "@reduxjs/toolkit";
import {ADD_CALC_PART, CHANGE_POSITION_CALC_ELEM} from "../../utils/constans";
import {IConstructorElement, IPositionChangeObj} from "../../utils/types";

export const addCalcPart = createAction<IConstructorElement, typeof ADD_CALC_PART>(ADD_CALC_PART);
export const changePositionCalcElem = createAction<IPositionChangeObj, typeof CHANGE_POSITION_CALC_ELEM>(CHANGE_POSITION_CALC_ELEM)