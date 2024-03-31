import AppName from './components/AppName.'
import AddTodo from './components/AddTodo'
import "./App.css";
import TodoIteams from './components/TodoIteams';
import WelcomeMessage from './components/WelcomeMessage';
import TodoIteamContextProvider from './store/todo-iteam-store';

function App() {


  return (
    <TodoIteamContextProvider>
      <center className='todoAppContainer'>
        <AppName />
        <div className='item-container'>
          <AddTodo></AddTodo>
          <WelcomeMessage></WelcomeMessage>
          <TodoIteams />
        </div>
      </center>
    </TodoIteamContextProvider>
  );
}

export default App
