import { useState } from 'react';
import './App.css';

import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoLis';


function App() {

  const [Todo, setTodo] = useState([]);

  const addTudo = (newTodo) => {
    setTodo([...Todo, newTodo]);
    console.log(Todo);
  }

  const handleTodo = (listedRemove) => {
    setTodo(Todo.filter(listed => listed !== listedRemove))
  }
  return (
    <div className="App">
      <header className="App-header">
        <Form addTudo = {addTudo}/>
        <TodoList todo = {Todo} handleTodo = {handleTodo}/>
      </header>
    </div>
  );
}

export default App;
