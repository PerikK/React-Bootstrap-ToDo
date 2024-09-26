import { useState } from "react"
import { Form, Button, InputGroup, FormControl } from "react-bootstrap"
import { Plus } from "react-bootstrap-icons"


export default function ToDoInput({ onSubmit, initialValue = '' }) {
    const [input, setInput] = useState(initialValue)
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (input) {
            onSubmit(input)
            setInput('')
        }
    }


    return (
        <Form onSubmit={handleSubmit} className="w-100">
            <InputGroup>
                <FormControl
                    type="text"
                    placeholder="Add a task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button type="submit"><Plus/>Add</Button>
            </InputGroup>

        </Form>
    )
}