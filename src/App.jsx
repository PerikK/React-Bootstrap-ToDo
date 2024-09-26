import { Container } from "react-bootstrap"
import ToDoApp from "./components/ToDoApp"

function App() {

  return (
    <>
      <Container>
        <h1 className="py-3">
          ToDo App
        </h1>
        <ToDoApp/>
      </Container>
    </>
  )
}

export default App
