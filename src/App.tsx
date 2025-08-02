import { useState } from 'react';
import './App.css'
import InputField from './components/InputField';
const name: string = 'Allan';
import type { Todo } from './models'
import SingleTodo from './components/SingleTodo';

const App = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if(todo) {
      const newTodo: Todo = {
        id: Date.now(),
        todo,
        isDone: false,
      }
      setTodos([...todos, newTodo]);
      setTodo('')
    }
  }

  const handleToggleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
    )
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = (id: number, newText: string) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? {...todo, todo: newText} : todo
    ))
  }

  return (
    <>
      <h1>Get shit done! {name}</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <ul>
        {todos.map(todo => <SingleTodo key={todo.id} todo={todo} handleToggleDone={handleToggleDone} handleDelete={handleDelete} handleEdit={handleEdit}/>)}
      </ul>
    </>
  )
}

export default App