import styles from "./FoodInput.module.css";

const FoodInput = (props) => {


    return (
        <input type="text"
            placeholder="Enter Food Iteam"
            className={styles.foodInput}
            onKeyDown={props.onKeyDown}
        >
        </input>
    );
};

export default FoodInput;