import {createAction} from "@reduxjs/toolkit";
import {ADD_CALC_PART} from "../../utils/constans";

export const addCalcPart = createAction<string, typeof ADD_CALC_PART>(ADD_CALC_PART);