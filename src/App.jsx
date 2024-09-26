import { Container } from "react-bootstrap"
import ToDoApp from "./components/ToDoApp.jsx"

function App() {

  return (
    <>
      <Container>
        <h1 className="py-3">
          Your To Do's
        </h1>
        <ToDoApp/>
      </Container>
    </>
  )
}

export default App
