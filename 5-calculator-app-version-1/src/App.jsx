import style from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
function App() {

  return (
    <div className={style.calContainer}>
      <input className={style.inputContainer} type="text" />
      <ButtonContainer/>
    </div>
  );
}

export default App
