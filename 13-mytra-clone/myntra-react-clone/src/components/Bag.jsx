import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
import { useSelector } from "react-redux";

function Bag() {
    const bag = useSelector(state => state.bag);
    const items = useSelector(state => state.items);
    const finalItems = items.filter(item => {
        const itemIndex = bag.indexOf(item.id);
        return itemIndex >= 0;
    })
    return <>
        <main>
            <div className="bag-page">
                <div className="bag-items-container">
                    {finalItems.map(item => <BagItem item={item} />)}
                </div>
                <BagSummary />
            </div>
        </main>
    </>
}

export default Bag;