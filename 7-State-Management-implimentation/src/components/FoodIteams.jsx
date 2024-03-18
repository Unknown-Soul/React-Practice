import { useState } from "react";
import FoodInput from "./FoodInput";
import Item from "./Item";
const FoodIteams = () => {
    // let [foodIteams, setFoodIteams] = useState(["Dal", "Green Vegetable"]);
    let [foodIteams, setFoodIteams] = useState([]);
    const onKeyDown = (event) => {
        if (event.key === "Enter") {
            let newFoodItem = event.target.value;
            let newIteams = [...foodIteams, newFoodItem];
            setFoodIteams(newIteams);
        }

    }
    return (
        <>
            <FoodInput onKeyDown={onKeyDown} />
            <ul className="list-group">
                {foodIteams.map((items) => {
                    return <Item key={items} foodItem={items}></Item>
                })}
            </ul>
        </>
    );
};

export default FoodIteams;