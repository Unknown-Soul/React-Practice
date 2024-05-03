import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_DATA } from "../data/data";

const itemSlice = createSlice({
    name: 'item',
    initialState: DEFAULT_DATA,
    reducers: {
        addInitialItems: (store, action) => {
            return store;
        }
    }

});

export default itemSlice;

