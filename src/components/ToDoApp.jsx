import { useState } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

export default function ToDoApp() {
    const [todos, setTodos] = useState([])

    const addTodo = (input) => {
        const newTodo = {
            id: 1,
            text: input,
            completed: false
        }
        setTodos(prevTodos => [...prevTodos, newTodo])
    }
    
    const deleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id)
        setTodos(filteredTodos)
    }

    const toggleComplete = (id) => {
        const updatedTodos = todos.map(todo => (
            todo.id === id ? {...todo, completed: !todo.completed}: todo
        ))
        setTodos(updatedTodos)
    }
    
    const editTodo = (id, newInput) => {
            const updatedTodos = todos.map(todo => (
            todo.id === id ? {...todo, text: newInput}: todo
        ))
        setTodos(updatedTodos)}    
    



    return (
        <div>
            <ToDoInput onSubmit={addTodo} />
            <ToDoList todos={todos} />
        </div>
    )
}