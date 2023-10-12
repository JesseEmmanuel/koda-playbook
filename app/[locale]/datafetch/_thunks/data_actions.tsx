import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchDataStart, fetchDataSuccess, fetchDataFailure, fetchImage } from "../_redux/root_slice";
import { RootState } from '@/store';

const apiUrl = "https://jsonplaceholder.typicode.com/todos";
const imageApi = "https://jsonplaceholder.typicode.com/photos";

export const fetchData = () => async (dispatch: Dispatch) => {
    dispatch(fetchDataStart());
    const response = await axios.get(apiUrl);
    dispatch(fetchDataSuccess(response.data));
    const imageResp = await axios.get(imageApi);
    dispatch(fetchImage(imageResp.data))
}