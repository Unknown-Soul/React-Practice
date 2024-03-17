const ErrorMessage = () => {
    let foodIteams = ["Dal", "Green Vegetable", "Roti", "Salad", "Mild"];
    return    <>{foodIteams.length === 0 && "I am Still Hungary"}</>;
}

export default ErrorMessage;