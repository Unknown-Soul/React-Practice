import { createContext } from "react";

const TodoItemsContext = createContext({
    items: [],
    addIteams: () => { },
    deleteIteams: () => { },
});

export { TodoItemsContext };