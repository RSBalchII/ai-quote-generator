
import { apis } from './apis'
import {setupListeners} from "@reduxjs/toolkit/query";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import auth from "./auth";

const reducer = combineReducers({auth, votes, currentUser, posts, profiles, api: apis.reducer})
export const store = configureStore({
    reducer: {
        [apis.reducerPath]: apis.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apis.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// useAppDispatch and useAppDelectore are custom hooks that allow us to use redux in our components
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector