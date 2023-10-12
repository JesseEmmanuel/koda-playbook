import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataState } from "./root_state";

const initialState: DataState = {
    loading: false,
    error: null,
    items: [],
    images: []
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        fetchDataStart: (state: DataState) => {
            return {
                ...state,
                loading: true,
                error: null
            }
        },

        fetchDataSuccess: (state: DataState, action: PayloadAction<any>) => {
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null
            }
        },

        fetchDataFailure: (state: DataState, action: PayloadAction<string>) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

        fetchImage: (state: DataState, action: PayloadAction<any>) => {
            return {
                ...state,
                images: action.payload,
                loading: false,
                error: null
            }
        }
    }
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, fetchImage } = dataSlice.actions;
export default dataSlice.reducer;