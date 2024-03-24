import React, { useState } from "react";
import style from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  const [value, setValue] = useState(""); // Initialize value as an empty string

  const onClickEvent = (buttonName) => {
    if (buttonName === "=") {
      // Calculate the result
      const cal = eval(value);
      setValue(cal);
    } if (buttonName === "c") {
      setValue("");
    }
    else {
      // Append the clicked button value to the existing value
      setValue(prevValue => prevValue + buttonName);
    }
  };

  return (
    <div className={style.calContainer}>
      <Display val={value} />
      <ButtonContainer onClickEvent={onClickEvent} />
    </div>
  );
}

export default App;
