import styles from "./FoodInput.module.css";

const FoodInput = (props) =>{


    return (
        <input type="text"
            placeholder="Enter Food Iteam"
            className={styles.foodInput}
            onChange={props.handleOnChange}
            >
        </input>
    );
};

export default FoodInput;