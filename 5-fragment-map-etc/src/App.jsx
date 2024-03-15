import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  let foodIteams = ["Dal","Green Vegetable","Roti","Salad","Mild"];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ul class="list-group">
        {foodIteams.map(item=> <li class="list-group-item">{item}</li>)}
      </ul>
    </>
  )
}

export default App
