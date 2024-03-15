import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  let foodIteams = ["Dal","Green Vegetable","Roti","Salad","Mild"];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodIteams.map(item=> <li key={item} className="list-group-item">{item}</li>)}
      </ul>
    </>
  )
}

export default App
