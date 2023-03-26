import React, { useState } from 'react';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.jsx';
import './App.css';


const allDetails = [
  {
    id: "",
    content: "Add todo",
    complete: false,
  },
];


function App() {

  const [todos, setTodos] = useState(allDetails);
  const [menu, setMenu] = useState("all");

  function handleAddTodo(task) {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        content: task,
        complete: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((element) => {
        if (element.id === nextTodo.id) {
          return nextTodo;
        } else {
          return element;
        }
      })
    );
  }

  function handleMenuTodo(e) {
    setMenu(e.target.value);
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  function handleDeleteAllTodo() {
    setTodos(todos.filter((el) =>el.complete !== true));
  }
  

  return (
    <div className="container">
      <Header menu={menu} onHandlemenu={handleMenuTodo}/>
      <Main 
      menu={menu} 
      todos={todos} 
      onChangeTodo={handleChangeTodo} 
      onDeleteTodo={handleDeleteTodo} 
      onDeleteAllTodo={handleDeleteAllTodo}
      onAddTodo={handleAddTodo}
      />
    </div>
  );
}

export default App;
