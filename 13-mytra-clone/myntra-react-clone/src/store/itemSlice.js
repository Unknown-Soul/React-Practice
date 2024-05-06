import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_DATA } from "../data/data";

const itemSlice = createSlice({
    name: 'item',
    // initialState: DEFAULT_DATA,
    initialState: [],
    reducers: {
        addInitialItems: (store, action) => {
            // console.log(
            //     "itemSlice", store, action
            // )
            return action.payload;
        }
    }

});

export const itemSliceAction = itemSlice.actions;
export default itemSlice;

