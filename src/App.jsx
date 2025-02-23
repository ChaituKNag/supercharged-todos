import { useState } from 'react'
import './App.css'
import NewTodo from './pages/NewTodo';
// import db from './db'

function App() {
  const [todos, setTodos] = useState([
    "Learn Javascript",
    "Build a project - Ex: To do list",
    "Learn ReactJs"
  ]);

  /* 
    Vamshi
  */

  // 3. Sravan
  //  ✅Create a docker config to host the frontend application 


  return (
    <div className="container">
      <h1>Supercharged Todos</h1>
      <div className="list-todos">
        <ol>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ol>
      </div>

      <NewTodo todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
