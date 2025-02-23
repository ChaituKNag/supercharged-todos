import { useRef } from "react";

function NewTodo({ todos, setTodos }) {
  // paste here
  const todoRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todoRef.current.value])
    todoRef.current.value = "";
  }

  return (
    <div>
      <h1>New Todo Form</h1>
      <div className="new-todo-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor ="to do"> Todo:</label>
          <input ref={todoRef} type="text" id="todo" placeholder="Enter your todo" required></input>
          <button type="submit"> Add to do </button>
        </form>
      </div>
    </div>
  )
}

export default NewTodo