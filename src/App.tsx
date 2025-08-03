import { useState, useEffect } from 'react';
import './App.css';
import InputField from './components/InputField';
import type { Todo } from './models';
import SingleTodo from './components/SingleTodo';

const App = () => {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);
    console.log('ddddd');
    let a = 'Allan';
    let adss = 'Allan';

    useEffect(() => {
            const todosFromLocalStorage = localStorage.getItem('todos');
        if (todosFromLocalStorage) {
            setTodos(JSON.parse(todosFromLocalStorage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAdd = (event: React.FormEvent) => {
        event.preventDefault();
        if (todo) {
            const newTodo: Todo = {
                id: Date.now(),
                todo,
                isDone: false,
            };
            setTodos([...todos, newTodo]);
            setTodo('');
        }
    };

    const handleToggleDone = (id: number) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (id: number, newText: string) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: newText } : todo)));
    };

    return (
        <>
            <h1>Get shit done!</h1>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <ul>
                {todos.map((todo) => (
                    <SingleTodo
                        key={todo.id}
                        todo={todo}
                        handleToggleDone={handleToggleDone}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                ))}
            </ul>
        </>
    );
};

export default App;
