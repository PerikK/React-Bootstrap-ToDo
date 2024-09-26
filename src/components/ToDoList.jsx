import ToDoItem from './ToDoItem.jsx'

export default function ToDoList({ todos }) {
    return (
        <div>
            {todos.map(todo => (
                <ToDoItem todo={todo} key={todo.id} />
            ))}
        </div>
    )
}