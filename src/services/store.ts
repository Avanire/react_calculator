import { configureStore } from '@reduxjs/toolkit'
import {rootReducer} from "./reducers";
import {addCalcPart} from "./actions/calculator";

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredPaths: ['calculatorConstructor.constructor'],
            ignoredActions: [addCalcPart.type]
        }
    }),
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;