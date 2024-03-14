import { useState } from 'react'
import AppName from './components/AppName.'
import AddTodo from './components/AddTodo'
import TodoIteam1 from './components/TodoIteam1'
import TodoIteam2 from './components/TodoIteam2'
import "./App.css";

function App() {

  return (

    <center className='todoAppContainer'>
        <AppName/>
        <div className='item-container'>
          <AddTodo/>
          <AddTodo/>
          <TodoIteam1/>
          <TodoIteam2/>  
        </div>
      </center>

  )
}

export default App
