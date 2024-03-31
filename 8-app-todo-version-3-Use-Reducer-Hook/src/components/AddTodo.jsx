import { useContext, useRef } from "react";
import styles from "./AddTodo.module.css"
import { IoIosAdd } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-iteam-store";

function AddTodo() {
    const task = useRef();
    const date = useRef();
    const contextObj = useContext(TodoItemsContext);
    const onAddTodoIteam = contextObj.addIteams;

    const handleAddTodo = (event) => {
        event.preventDefault();
        const taskTemp = task.current.value;
        const dateTemp = date.current.value
        onAddTodoIteam(taskTemp, dateTemp);
        task.current.value = "";
        date.current.value = "";
    };
    return <div className="container">
        <form className={`row ${styles.customRow}`}
            onSubmit={handleAddTodo}
        >
            <div className="col-6">
                <input type="text" placeholder='Enter Todo' ref={task} /></div>
            <div className="col-4">
                <input type="date" name="datePicker" id="date" ref={date} /></div>
            <div className="col-2">
                <button type='submit' className={`btn btn-success ${styles.customButton}`}><IoIosAdd /></button>      </div>
        </form>
    </div>
        ;
}

export default AddTodo;