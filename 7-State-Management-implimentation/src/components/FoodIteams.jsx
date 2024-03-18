import { useState } from "react";
import FoodInput from "./FoodInput";
import Item from "./Item";
const FoodIteams = () => {
    // let foodIteams = [];
    let foodIteams = ["Dal", "Green Vegetable", "Roti", "Salad", "Mild"];
    // let textStateArr = useState("Food Iteam ented by user"); // by default return array of 2 length
    // let textToShow = textStateArr[0]; // first value of state
    // let setTextState = textStateArr[1]; // second function to set valye of state

    let [textToShow, setTextState] = useState("Food Iteam ented by user"); // concise way
    console.log(`data eneter by user i ${textToShow}`);
    const handleOnChange = (event) => {
        console.log(event.target.value);
        setTextState(event.target.value); // set state value
    }
    return (
        <> 
            <FoodInput handleOnChange={handleOnChange} />
            <p>{textToShow}</p>
            <ul className="list-group">
                {foodIteams.map((items) => {
                    return <Item key={items} foodItem={items}></Item>
                })}
            </ul>
        </>
    );
};

export default FoodIteams;