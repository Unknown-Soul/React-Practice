import Item from "./Item";
const FoodIteams = () => {
      // let foodIteams = [];
       let foodIteams = ["Dal", "Green Vegetable", "Roti", "Salad", "Mild"];

    return (
        <ul className="list-group">
            {foodIteams.map((items) => {
                return <Item key={items} foodItem={items}></Item>
            })}
        </ul>);
};

export default FoodIteams;