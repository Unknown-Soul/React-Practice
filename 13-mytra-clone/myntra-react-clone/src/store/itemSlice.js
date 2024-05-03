import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'iteams',
    initialState: [],
    reducers: {
        addInitialItems: (store, action) => {
            return store;
        }
    }

});

export default itemSlice;