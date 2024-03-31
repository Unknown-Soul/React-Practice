import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-iteam-store";

const WelcomeMessage = () => {
    const contextObj = useContext(TodoItemsContext);
    const todo = contextObj.items;
    return (

        todo.length <= 0 &&
        <center>
            <h1>Welcome Your Work For Today Is All Done</h1>
        </center>
    );
}

export default WelcomeMessage;