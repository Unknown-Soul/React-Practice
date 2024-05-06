import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false, // PENDING and DONE
        currentlyFetching: false, //
    },
    reducers: {
        togglefetchDone: (store) => {
            return store.fetchDone = true;
        },
        markfetchingStarted: (store) => {
            return store.currentlyFetching = true;
        },
        markfetchingFinished: (store) => {
            return store.currentlyFetching = false;
        },
    }

});

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;

