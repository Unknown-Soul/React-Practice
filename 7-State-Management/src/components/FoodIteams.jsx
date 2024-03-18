import FoodInput from "./FoodInput";
import Item from "./Item";
const FoodIteams = () => {
    // let foodIteams = [];
    let foodIteams = ["Dal", "Green Vegetable", "Roti", "Salad", "Mild"];
    let textToShow = "Food Iteam ented by user";
    const handleOnChange = (event) => {
        console.log(event.target.value);
    }
    return (
        <> 
            <FoodInput handleOnChange={handleOnChange} />
            <ul className="list-group">
                {foodIteams.map((items) => {
                    return <Item key={items} foodItem={items}></Item>
                })}
            </ul>
        </>
    );
};

export default FoodIteams;