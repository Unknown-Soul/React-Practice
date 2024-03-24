import { useState } from "react";
import style from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";


function App() {
  const [value,setValue] = useState([]);

  return (
    <div className={style.calContainer}>
      <Display/>
      <ButtonContainer/>
    </div>
  );
}

export default App
