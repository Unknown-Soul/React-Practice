import { useContext } from "react";
import TodoIteam1 from "./TodoIteam1";
import { TodoItemsContext } from "../store/todo-iteam-store";

const TodoIteams = () => {
    const contextObj = useContext(TodoItemsContext);
    const todo = contextObj.items;

    return (
        <>
            {todo.map((item, index) => (
                <TodoIteam1
                    key={index}
                    itemName={item.itemName}
                    date={item.date}
                />
            ))}
        </>
    );
};

export default TodoIteams;
