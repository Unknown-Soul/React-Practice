const redux = require('redux');
const INTIAL_VALUE = {
    counter: 0
};

// reducer
// only assig INITAL_VALUE if store in any defined alread
const reducer = (store = INTIAL_VALUE, action) => {
    let newStore = store;
    if (action.type === "INCREMENT")
        return { counter: store.counter + 1 };
    if (action.type === "DECREMENT")
        return { counter: store.counter - 1 };
    if (action.type === "ADDITION")
        return { counter: store.counter + action.payload.number };
    return newStore;
}
const store = redux.createStore(reducer);


// subscriber
const subscriber = () => {
    const state = store.getState();
    console.log(state);
}


store.subscribe(subscriber);

// action getting dispached
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADDITION', payload: { number: 7 } });

