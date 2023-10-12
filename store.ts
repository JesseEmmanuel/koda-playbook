import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './app/[locale]/_redux/root_slice';
import counterSlice from './app/[locale]/counter/_redux/root_slice';
import dataSlice from './app/[locale]/datafetch/_redux/root_slice';
import { useSelector, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
    reducer: {
        rootReducer,
        counterSlice,
        dataSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;