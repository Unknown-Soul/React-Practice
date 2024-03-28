import AppName from './components/AppName.'
import AddTodo from './components/AddTodo'
import "./App.css";
import TodoIteams from './components/TodoIteams';
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import { TodoItemsContext } from './store/todo-iteam-store';
function App() {
  const [todoItemList, setTodoIteamList] = useState([]);

  function onAddTodoIteam(item, date) {
    setTodoIteamList([...todoItemList, {
      itemName: item,
      date: date,
    }]);
  };

  function onDeleteTodoIteam(itemNameToDelete) {
    setTodoIteamList(prevTodoItemList =>
      prevTodoItemList.filter(item => item.itemName !== itemNameToDelete)
    );
  }

  return (
    <TodoItemsContext.Provider value={{
      items: todoItemList,
      addIteams: onAddTodoIteam,
      deleteIteams: onDeleteTodoIteam,
    }
    }>
      <center className='todoAppContainer'>
        <AppName />
        <div className='item-container'>
          <AddTodo></AddTodo>
          <WelcomeMessage></WelcomeMessage>
          <TodoIteams/>
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App
