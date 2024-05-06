import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false, // PENDING and DONE
        currentlyFetching: false, //
    },
    reducers: {
        togglefetchDone: (store) => {
            store.fetchDone = true;
        },
        markfetchingStarted: (store) => {
            store.currentlyFetching = true;
        },
        markfetchingFinished: (store) => {
            store.currentlyFetching = false;
        },
    }

});

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;

