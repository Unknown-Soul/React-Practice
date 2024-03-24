import style from "./Display.module.css";

const Display = (props) => {
    return <input className={style.inputContainer} type="text" value={props.val} readOnly />;
}

export default Display;