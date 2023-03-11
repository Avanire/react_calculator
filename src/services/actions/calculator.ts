import {createAction} from "@reduxjs/toolkit";
import {ADD_CALC_PART} from "../../utils/constans";
import {IConstructorElement} from "../../utils/types";

export const addCalcPart = createAction<IConstructorElement, typeof ADD_CALC_PART>(ADD_CALC_PART);