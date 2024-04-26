import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {

    const inputElement = useRef();
    const dispatch = useDispatch();
    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
    }

    const handleIncreamnt = () => {
        dispatch({ type: "INCREMENT" });
    }


    const handleAdd = () => {
        dispatch({ type: "ADD", payload: { num: inputElement.current.value } });
        inputElement.current.value = "";
    }

    const handleSubtract = () => {
        dispatch({ type: "SUBTRACT", payload: { num: inputElement.current.value } });
        inputElement.current.value = "";
    }

    return <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncreamnt}>+1</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleDecrement}>-1</button>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
            <input type="text" placeholder="Enter Number" className="number-input" ref={inputElement}></input>
            <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
            <button type="button" className="btn btn-danger" onClick={handleSubtract}>Subtract</button>
        </div>
    </>
}

export default Controls;