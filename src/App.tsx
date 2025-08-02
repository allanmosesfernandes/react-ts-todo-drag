import { useState } from 'react';
import './App.css'
import InputField from './components/InputField';
const name: string = 'Allan';
import type { Todo } from './models'
import AllToDos from './components/AllToDos';

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

  // const handleToggleDone = (id: number) => {
  //   setTodos((
  //     todos.map((todo) => {})
  //   ))
  // }


  return (
    <>
      <h1>Get shit done! {name}</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <AllToDos todos={todos} handleToggleDone={handleToggleDone}/>
    </>
  )
}

export default App
