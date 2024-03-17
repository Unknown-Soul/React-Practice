import 'bootstrap/dist/css/bootstrap.min.css'
import FoodIteams from './components/FoodIteams';
import Container from './components/Container';
import ErrorMessage from './components/ErrorMessages';
function App() {

  return (
    <Container>
      <h1>Healthy Foods</h1>
       <ErrorMessage></ErrorMessage>
      <FoodIteams></FoodIteams>
    </Container>
  )
}

export default App
