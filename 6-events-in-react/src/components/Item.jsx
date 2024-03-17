import style from "./Item.module.css";

const Item = (props) => {
    const handleBuyButtonEvent = () => {
        console.log(event);
        console.log(`buy button click ${props.foodItem}`)
    }
    return (
        <>
            <li className="list-group-item">{props.foodItem}</li>
            <button className={`btn btn-info ${style.button}`}
                onClick={(event) => handleBuyButtonEvent()}
            >Buy</button>
        </>

    );
}

export default Item;