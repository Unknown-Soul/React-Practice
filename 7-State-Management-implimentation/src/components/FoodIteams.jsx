import { useState } from "react";
import FoodInput from "./FoodInput";
import Item from "./Item";

const FoodItems = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [activeItems, setActiveItems] = useState([]); // Corrected variable name

    const onKeyDown = (event) => {
        if (event.key === "Enter") {
            let newFoodItem = event.target.value;
            let newItems = [...foodItems, newFoodItem];
            setFoodItems(newItems);
        }
    }

    const handleBuyButtonEvent = (foodItem) => {
        console.log(`Buy button clicked for ${foodItem}`);
        setActiveItems([...activeItems, foodItem]); // Update activeItems state
    }

    return (
        <>
            <FoodInput onKeyDown={onKeyDown} />
            <ul className="list-group">
                {foodItems.map((item) => (
                    <Item
                        key={item}
                        foodItem={item}
                        handleBuyButtonEvent={() => handleBuyButtonEvent(item)}
                        bought={activeItems.includes(item)} // Pass whether item is bought as prop
                    />
                ))}
            </ul>
        </>
    );
};

export default FoodItems;
