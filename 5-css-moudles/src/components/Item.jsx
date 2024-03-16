import styles from "./Item.module.css";

const Item = (props) => {
    return (
        <li className={`${styles.sampleBackground} list-group-item`}>
            <span className={styles.fontSize}>{props.foodItem}</span>
        </li>
    );
}

export default Item;
