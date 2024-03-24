
import style from "./ButtonContainer.module.css";

const ButtonContainer = ({ onClickEvent }) => {
  const buttonsList = ["c", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
  return (
    <div className={style.buttonContainer} >
      {buttonsList.map((buttonName) => (<button className={style.button} key={buttonName} value={buttonName}
        onClick={() => onClickEvent(buttonName)} // Pass buttonName to the click event handler
      >
      {buttonName}</button>))}
    </div>
  );
}

export default ButtonContainer;