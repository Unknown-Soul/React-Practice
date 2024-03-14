function AddTodo() {
    return <div className="container">
        <div class="row custom-row">
            <div class="col-6">
                <input type="text" placeholder='Enter Todo' />      </div>
            <div class="col-4">
                <input type="date" name="datePicker" id="date" />       </div>
            <div class="col-2">
                <button type='button' className='btn btn-success custom-botton'>Add</button>      </div>
        </div>
    </div>
        ;
}

export default AddTodo;