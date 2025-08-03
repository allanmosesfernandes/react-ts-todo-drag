import { useState, useEffect } from 'react';
import type { Todo } from '../models';
interface Props {
    todo: Todo;
    handleToggleDone: (id: number) => void;
    handleDelete: (id: number) => void;
    handleEdit: (id: number, newText: string) => void;
}

const SingleTodo = ({ todo, handleToggleDone, handleDelete, handleEdit }: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodoText, setEditedTodoText] = useState(todo.todo);
    useEffect(() => {
        setEditedTodoText(todo.todo);
    }, [todo]);
    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handleEdit(todo.id, editedTodoText);
        setIsEditing(false);
    };

    return (
        <>
            {isEditing ? (
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        placeholder={todo.todo}
                        value={editedTodoText}
                        onChange={(e) => setEditedTodoText(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <li key={todo.id} className={todo.isDone ? 'completed' : ''}>
                    {todo.todo}
                    <span className="icon" onClick={() => handleToggleDone(todo.id)}>
                        ✅
                    </span>
                    <span className="icon" onClick={() => handleDelete(todo.id)}>
                        ❌
                    </span>
                    {todo.isDone ? null : (
                        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
                    )}
                </li>
            )}
        </>
    );
};

export default SingleTodo;
