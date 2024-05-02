import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

function Bag() {
    const item = {
        company: "ax",
        current_price: 12,
        original_price: 123,
        discount_percentage: 12344,
        return_period: 123,
        delivery_date: 12
    }
    return <>
        <main>
            <div className="bag-page">
                <BagItem item={item} />
                <BagSummary />
            </div>
        </main>
    </>
}

export default Bag;