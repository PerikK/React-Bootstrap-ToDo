import ToDoItem from './ToDoItem.jsx'

export default function ToDoList({ todos, editTodo,toggleComplete, deleteTodo }) {
    
    return (
        <div>
            {todos.map(todo => (
                <ToDoItem
                    todo={todo}
                    key={todo.id}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </div>
    )
}