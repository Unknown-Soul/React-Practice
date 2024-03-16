import Item from "./Item";
const FoodIteams = (props) => {

    return (
        <ul className="list-group">
            {props.iteam.map((items) => {
                return <Item key={items} foodItem={items}></Item>
            })}
        </ul>);
};

export default FoodIteams;