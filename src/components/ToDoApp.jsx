import { useState } from 'react'
import ToDoInput from './ToDoInput.jsx'
import ToDoList from './ToDoList.jsx'

export default function ToDoApp() {
    const [todos, setTodos] = useState([])

    const addTodo = (input) => {
        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false
        }
        setTodos(prevTodos => [...prevTodos, newTodo])
    }
    
    const editTodo = (id, newInput) => {
            const updatedTodos = todos.map(todo => (
            todo.id === id ? {...todo, text: newInput}: todo
        ))
        setTodos(updatedTodos)
    }    
    
    const toggleComplete = (id) => {
        const updatedTodos = todos.map(todo => (
            todo.id === id ? {...todo, completed: !todo.completed}: todo
        ))
        setTodos(updatedTodos)
    }
    
    const deleteTodo = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this To Do?')

        if (confirmDelete) {            
            const filteredTodos = todos.filter(todo => todo.id !== id)
            setTodos(filteredTodos)
        }
    }
    

    return (
        <div>
            <ToDoInput onSubmit={addTodo} />
            <ToDoList
                todos={todos}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
            />
        </div>
    )
}