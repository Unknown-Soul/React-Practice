import { createStore } from "redux";

const INTITIAL_VALUE = {
    counter: 0
}
// reducer
const counterReducer = (store = INTITIAL_VALUE, action) => {
    return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;