import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList';
import './Main.css'

function Main({menu, todos, onAddTodo, onChangeTodo, onDeleteTodo, onDeleteAllTodo}) {

  const [details, setDetails] = useState("");

  function addTodo() {
    if (details?.length <= 0) {
      alert("El campo esta vacio");
      return;
    }
    setDetails("");
    onAddTodo(details);
  }

  console.log(todos)

  return (
    <main>
    <form onSubmit={e => e.preventDefault()}>
      {menu !== "complete" && (
        <div>
          <input type="text" placeholder='add task' value={details} onChange={e => setDetails(e.target.value)}/>
          <button onClick={addTodo}>Add</button>
        </div>
      )}
      <ol>
        {todos?.length > 0 && todos.map(el => (
          <li className='todo-list' style={{textDecoration: el.complete && "line-through"}} key={el.id}>
            {menu === "all" && (
              <TodoList menu={menu} todo={el} onChange={onChangeTodo}/>
            )}
            {menu === "active" && el.complete === false && (
              <TodoList menu={menu} todo={el} onChange={onChangeTodo}/>
            )}
            {menu === "complete" && el.complete === true && (
              <TodoList menu={menu} todo={el} onChange={onChangeTodo} onDelete={onDeleteTodo}/>
            )}
          </li>
        ))}
        {menu === "complete" && (
          todos.every(({complete}) => complete === false) && (
            <li>No Task Complete</li>
          )
        )}
      </ol>
      {menu === "complete" && todos.some(({complete}) => complete === true) && (
        <button onClick={onDeleteAllTodo}>delete all</button>
      )}
    </form>
    </main>
  )
}

export default Main