import type { Todo } from '../models'

interface Props {
    todos: Todo[],
    handleToggleDone: (id: number) => void;
}
const AllToDos = ({ todos, handleToggleDone } : Props) => {
    return (
        <div>
            <h3>Here lies all our todos</h3>
            <ul>
                {
                    todos.map((item) => {
                        return <li key={item.id} className={item.isDone ? 'completed' : ''}>{item.todo} <span onClick={() => handleToggleDone(item.id)}>done</span></li>
                    })
                }
            </ul>
        </div>
    )
}

export default AllToDos