import styles from "./AddTodo.module.css";

function AddTodo() {
    return <div className="container">
        <div className={`row ${styles.customRow}`}>
            <div className="col-6">
                <input type="text" placeholder='Enter Todo' />      </div>
            <div className="col-4">
                <input type="date" name="datePicker" id="date" />       </div>
            <div className="col-2">
                <button type='button' className={`btn btn-success ${styles.customButton}`}>Add</button>      </div>
        </div>
    </div>
        ;
}

export default AddTodo;