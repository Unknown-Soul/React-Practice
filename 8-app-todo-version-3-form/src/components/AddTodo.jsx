import { useState } from "react";
import styles from "./AddTodo.module.css"
import { IoIosAdd } from "react-icons/io";

function AddTodo({ onAddTodoIteam }) {
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");

    const onTaskChange = (event) => {
        setTask(event.target.value);
    }

    const onDateChange = (event) => {
        setDate(event.target.value);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodoIteam(task, date);
        setTask("");
        setDate("");
    };
    return <div className="container">
        <form className={`row ${styles.customRow}`}
            onSubmit={handleAddTodo}
        >
            <div className="col-6">
                <input type="text" placeholder='Enter Todo' value={task} onChange={onTaskChange} /></div>
            <div className="col-4">
                <input type="date" name="datePicker" id="date" value={date} onChange={onDateChange} />       </div>
            <div className="col-2">
                <button type='submit' className={`btn btn-success ${styles.customButton}`}><IoIosAdd /></button>      </div>
        </form>
    </div>
        ;
}

export default AddTodo;