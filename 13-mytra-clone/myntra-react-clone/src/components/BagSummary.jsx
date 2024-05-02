const BagSummary = () => {
    const BagSummary = {
        totalItem: 3,
        totalDiscount: 2312,
        totalMRP: 3456,
        finalPayment: 123
    };

    return <><div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({BagSummary.totalItem} Items) </div>
        <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{BagSummary.totalMRP}</span>
        </div>
        <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">-₹{BagSummary.totalDiscount}</span>
        </div>
        <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹99</span>
        </div>
        <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{BagSummary.finalPayment}</span>
        </div>
    </div><button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
        </button></>;
}

export default BagSummary;