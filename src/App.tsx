import { useState } from 'react';
import './App.css'
import InputField from './components/InputField';
const name: string = 'Allan';


const App = () => {

  const [todo, setTodo] = useState<string>('');
  console.log(todo)
  return (
    <>
      <h1>Get shit done! {name}</h1>
      <InputField todo={todo} setTodo={setTodo}/>
    </>
  )
}

export default App
