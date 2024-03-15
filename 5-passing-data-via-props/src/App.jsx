import 'bootstrap/dist/css/bootstrap.min.css'
import FoodIteams from './components/FoodIteams';
import ErrorMessage from './components/ErrorMessages';
function App() {
  // let foodIteams = [];
  let foodIteams = ["Dal", "Green Vegetable", "Roti", "Salad", "Mild"];
  return (
    <>
      <h1>Healthy Foods</h1>
       <ErrorMessage></ErrorMessage>
      <FoodIteams></FoodIteams>
    </>
  )
}

export default App
