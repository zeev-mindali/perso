import {combineReducers} from "redux";
import { authReducer } from "./authState";
import {configureStore} from '@reduxjs/toolkit'

const reducers = combineReducers({authState:authReducer,});
export const store = configureStore({reducer:reducers});