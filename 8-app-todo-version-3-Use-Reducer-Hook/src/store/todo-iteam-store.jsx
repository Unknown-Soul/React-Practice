import { createContext } from "react";

export const TodoItemsContext = createContext({
    items: [],
    addIteams: () => { },
    deleteIteams: () => { },
});

// Reducer hook
const TodoIteamsReducer = (currentStateOfTodo, action) => {
    let newTodoItems = currentStateOfTodo;
    if (action.type === "ADD_NEW_ITEAM") {
        newTodoItems = [
            ...currentStateOfTodo,
            {
                itemName: action.payload.itemName,
                date: action.payload.date,
            },
        ];
    } else if (action.type === "DELETE_ITEAM") {
        newTodoItems = currentStateOfTodo.filter((item) => item.itemName !== action.payload.itemName)
    }
    return newTodoItems;
}


// component
const TodoIteamContextProvider = ({ children }) => {
    //  take input a pureFuction and inital value
    const [todoItemList, dispatchTodoIteams] = useReducer(TodoIteamsReducer, []);

    function onAddTodoIteam(item, date) {
        const newItemAction = {
            type: "ADD_NEW_ITEAM",
            payload: {
                itemName: item,
                date: date,
            }
        }
        dispatchTodoIteams(newItemAction);
    };


    function onDeleteTodoIteam(itemNameToDelete) {
        const newItemAction = {
            type: "DELETE_ITEAM",
            payload: {
                itemName: item,
            }
        };
        dispatchTodoIteams(newItemAction);
    };
    return (<TodoItemsContext.Provider value={{
        items: todoItemList,
        addIteams: onAddTodoIteam,
        deleteIteams: onDeleteTodoIteam,
    }
    }>{children}</TodoItemsContext.Provider>
    );
};

export default TodoIteamContextProvider;