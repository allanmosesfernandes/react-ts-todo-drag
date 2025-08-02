interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd } : Props) => {
    return (
        <form className="input" onSubmit={handleAdd}>
            <input type="text" placeholder="Enter a task" className="input__box" value={todo} onChange={
                (e) => setTodo(e.target.value)
            }/>
            <button className="input__submit">Go</button>
        </form>
    )
}

export default InputField