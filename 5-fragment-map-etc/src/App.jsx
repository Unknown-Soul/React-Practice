import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  // let foodIteams = [];
  let foodIteams = ["Dal", "Green Vegetable", "Roti", "Salad", "Mild"];

  // if(foodIteams.length===0){
  //   return "I am Still Hungary";
  // }else{
  // return (
  //   <>
  //     <h1>Healthy Foods</h1>
  //     <ul className="list-group">
  //       {foodIteams.map(item=> <li key={item} className="list-group-item">{item}</li>)}
  //     </ul>
  //   </>
  // )
  // }
  return (
    <>
      <h1>Healthy Foods</h1>
      {/* {foodIteams.length===0?"I am Still Hungary":null} */}
      {foodIteams.length === 0 && "I am Still Hungary"}
      <ul className="list-group">
        {foodIteams.map(item => <li key={item} className="list-group-item">{item}</li>)}
      </ul>
    </>
  )
}

export default App


// Three ways of conditional Formating  to reducing unecessay rendering
//  if else 
//  {foodIteams.length===0?"I am Still Hungary":null} 
//  {foodIteams.length===0&&"I am Still Hungary"}

