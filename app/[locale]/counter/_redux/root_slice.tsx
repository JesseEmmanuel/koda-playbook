import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./root_state";

const initialState: RootState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // incremented: state => {
        //     state.counter += 1
        // },

        // decremented: state => {
        //     state.counter -= 1
        // }
        incrementButtonPressed: (state: RootState, action: PayloadAction<number>) => {
            return {
                ...state,
                count: action.payload += 1
            }
        },

        decrementButtonPressed: (state: RootState, action: PayloadAction<number>) => {
            return {
                ...state,
                count: action.payload -= 1
            }
        },

        resetButtonPressed: (state: RootState, action: PayloadAction<Number>) => {
            return {
                ...state,
                count: 0

            }
        }
    }
})

export const { incrementButtonPressed, decrementButtonPressed, resetButtonPressed } = counterSlice.actions
export default counterSlice.reducer