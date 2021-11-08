import React, { useState } from "react";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e. preventDefault();

    if(newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([ ... todos, todoItem])
  }

  const handleNewTodoDelete = (del) => {
    const flitlerTodos = todos.filter((todo, i) => {
      return i !== del;
    });

    setTodos(flitlerTodos);
  }

  const toggleComplete = (id) => {
    const updateTodos = todos.map((todo, i) => {
      if(id === i){
        // todo.complete = !todo.complete;
        // alternative way ^^
        const updateTodos = {... todo, complete: !todo.complete };

        return updateTodos;
    }
    });
    setTodos(updateTodos);
  }

  return (
    <div className="App">
      <form onSubmit = {(e) =>{
          handleNewTodoSubmit(e);
        }}>
          <input onChange ={(e) =>{
            setNewTodo (e.target.value);
          }} 
          type="text" 
          value ={newTodo}
          />
          <div>
            <button>Add</button>
          </div>
      </form>
      <br />

      {todos.map((todo, i) => {
          const todoClasses = [];

          if(todo.complete){
            todoClasses.push("line-through");
          }
        
          return (
            <div>
              <span className={todoClasses.join(" ")}>{todo.text}</span>
              <input onChange={(e) => {
                toggleComplete(i);
              }
              } checked={todo.complete} type ="checkbox" />
              <button onClick={(e) =>
              handleNewTodoDelete(i)
              } style={{marginLeft: "10px"}}>Delete</button>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
