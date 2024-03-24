import style from "./Item.module.css";

const Item = (props) => {

    return (
        <>
            <li className={`list-group-item ${props.bought?'active':''}`}>{props.foodItem}</li>
            <button className={`btn btn-info ${style.button}`}
                onClick={props.handleBuyButtonEvent}
                >Buy</button>
        </>

    );
}

export default Item;