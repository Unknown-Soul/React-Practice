import { createStore } from "redux";

const INTITIAL_VALUE = {
    counter: 0
}
// reducer
const counterReducer = (store = INTITIAL_VALUE, action) => {
    console.log("Action Recived", action);
    if (action.type === 'DECREMENT')
        return { counter: store.counter - 1 };
    if (action.type === 'INCREMENT')
        return { counter: store.counter + 1 };
    if (action.type === 'ADD')
        return { counter: store.counter + Number(action.payload.num) };
    if (action.type === 'SUBTRACT')
        return { counter: store.counter - Number(action.payload.num) };
    return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;