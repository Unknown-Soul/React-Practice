import AppName from './components/AppName.'
import AddTodo from './components/AddTodo'
import "./App.css";
import TodoIteams from './components/TodoIteams';
import { useReducer, useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import { TodoItemsContext } from './store/todo-iteam-store';

const TodoIteamsReducer = (currentStateOfTodo, action) => {
  let newTodoItems = currentStateOfTodo;
  if (action.type === "ADD_NEW_ITEAM") {
    newTodoItems = [
      ...currentStateOfTodo,
      {
        itemName: action.payload.itemName,
        date: action.payload.date,
      },
    ];
  } else if (action.type === "DELETE_ITEAM") {
    newTodoItems = currentStateOfTodo.filter((item) => item.itemName !== action.payload.itemName)
  }
  return newTodoItems;
}

function App() {
  const [todoItemList, dispatchTodoIteams] = useReducer(TodoIteamsReducer, []);

  function onAddTodoIteam(item, date) {
    const newItemAction = {
      type: "ADD_NEW_ITEAM",
      payload: {
        itemName: item,
        date: date,
      }
    }
    dispatchTodoIteams(newItemAction);
  };


  function onDeleteTodoIteam(itemNameToDelete) {
    const newItemAction = {
      type: "DELETE_ITEAM",
      payload: {
        itemName: item,
      }
    };
    dispatchTodoIteams(newItemAction);
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
          <TodoIteams />
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App
