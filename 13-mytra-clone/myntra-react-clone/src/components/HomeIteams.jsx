import { useDispatch, useSelector } from "react-redux";
import { bagSliceAction } from "../store/bagSlice";

const HomeIteams = ({ item }) => {
    const dispatch = useDispatch();
    const bagItem = useSelector(store => store.bag);
    const elementFound = bagItem.indexOf(item.id) >= 0;

    const handleAddToBag = () => {
        dispatch(bagSliceAction.addToBag(item.id))
    }
    const handleRemoveToBag = () => {
        dispatch(bagSliceAction.removeFromBag(item.id))
    }
    return <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? <button className="btn-add-bag btn-danger btn" onClick={handleRemoveToBag}>Remove From Bag</button> : <button className="btn-add-bag btn btn-success" onClick={handleAddToBag}>Add to Bag</button>}

    </div>;
};

export default HomeIteams;