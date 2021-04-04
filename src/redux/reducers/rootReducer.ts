import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import {todoReducer} from "./todoReducer";
import {cityReducer} from "./cityReducer";


export const rootReducer = combineReducers({
    user: appReducer,
    todo:todoReducer,
    city:cityReducer
})
export type rootState = ReturnType<typeof rootReducer>
    