import AppName from './components/AppName.'
import AddTodo from './components/AddTodo'
import "./App.css";
import TodoIteams from './components/TodoIteams';

function App() {

  const TodoIteamList = [
    {
      itemName: "Buy Milk",
      date: "04/02/2024",
    },
    {
      itemName: "Go To College",
      date: "04/02/2024",
    }
  ]
  return (

    <center className='todoAppContainer'>
        <AppName/>
        <div className='item-container'>
          <AddTodo ></AddTodo>  
          <TodoIteams todo={TodoIteamList}></TodoIteams>
        </div>
      </center>

  )
}

export default App
