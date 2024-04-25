import {createStore} from "redux";

// reducer
const counterReducer = (store, action) => {
    return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;