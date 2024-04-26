// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// const INTITIAL_VALUE = {
//     counter: 0
// }


// reducer
// const counterReducer = (store = INTITIAL_VALUE, action) => {
//     console.log("Action Recived", action);
//     if (action.type === 'DECREMENT')
//         return { counter: store.counter - 1 };
//     if (action.type === 'INCREMENT')
//         return { counter: store.counter + 1 };
//     if (action.type === 'ADD')
//         return { counter: store.counter + Number(action.payload.num) };
//     if (action.type === 'SUBTRACT')
//         return { counter: store.counter - Number(action.payload.num) };
//     return store;
// }


// const counterStore = createStore({

// });


const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterVal: 0 },
    reducers: {
        increment: (state) => {
            state.counterVal += 1; // Increment the counter value
        },
        decrement: (state) => {
            state.counterVal -= 1; // Decrement the counter value
        },
        add: (state, action) => {
            console.log(state, action);
            state.counterVal += Number(action.payload.num); // Add payload value to the counter
        },
        subtract: (state, action) => {
            console.log(state, action);
            state.counterVal -= Number(action.payload.num); // Subtract payload value from the counter
        },
    }
});


const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

export const { increment, decrement, add, subtract } = counterSlice.actions;
export default counterStore;