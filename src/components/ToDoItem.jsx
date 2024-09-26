import { useState } from 'react'
import ToDoInput from './ToDoInput'
import { Button } from 'react-bootstrap'
import {
	PencilSquare,
	Trash,
	Check2Circle,
	ArrowCounterclockwise,
} from 'react-bootstrap-icons'

export default function ToDoItem({
	todo,
	editTodo,
	toggleComplete,
	deleteTodo,
}) {
	const [editing, setEditing] = useState(false)

	const handleUpdate = (newInput) => {
		editTodo(todo.id, newInput)
		setEditing(false)
	}

	return (
		<div className='w-75 mt-3 mx-auto'>
			{editing ? (
				<div className='d-flex w-100'>
					<ToDoInput
						onSubmit={handleUpdate}
						initialValue={todo.text}
					/>
					<Button
						variant='secondary'
						className='ms-3'
						onClick={() => setEditing(false)}
					>
						<Trash />
					</Button>
				</div>
			) : (
				<div
					className={`d-flex w-100 border p-2 rounded d-flex align-items-center ${
						todo.completed ? 'alert alert-success' : ''
					} `}
				>
					<div className='w-75'>
						<span className={todo.completed ? 'text-decoration-line-through' : ''}>{todo.text}</span>
					</div>
					<div className='w-25 d-flex justify-content-end'>
						<Button
							variant='secondary'
							onClick={() => setEditing(!editing)}
						>
							<PencilSquare />
						</Button>
						<Button
							variant={todo.completed ? 'dark' : 'success'}
							className='ms-2'
							onClick={() => toggleComplete(todo.id)}
						>
							{!todo.completed ? <Check2Circle /> : <ArrowCounterclockwise/>}
						</Button>
						<Button
							variant='secondary'
							className='ms-2'
							onClick={() => deleteTodo(todo.id)}
						>
							<Trash />
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}
