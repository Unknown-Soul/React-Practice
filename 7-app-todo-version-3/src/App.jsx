import AppName from './components/AppName.'
import AddTodo from './components/AddTodo'
import "./App.css";
import TodoIteams from './components/TodoIteams';
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';

function App() {

  const [todoItemList, setTodoIteamList] = useState([
 
  ]);

  function onAddTodoIteam(item, date) {
    setTodoIteamList([...todoItemList, {
      itemName: item,
      date: date,
    }]);
  };


  return (
    <center className='todoAppContainer'>
      <AppName />
      <div className='item-container'>
        <AddTodo onAddTodoIteam={onAddTodoIteam}></AddTodo>
        {todoItemList.length <=0 && <WelcomeMessage></WelcomeMessage>}
        <TodoIteams todo={todoItemList} />
      </div>
    </center>
  );
}

export default App
