import NewTodo from './components/NewTodo'
import { Container, Row } from 'react-bootstrap'
import TodoList from './components/TodoList'
import { useState } from 'react'
import { todoType } from './types/todo.model'

const App:React.FC = () => {
  const [todo,setTodo]= useState<todoType[]>([]);

  const todoAddHandler =(comingtext:string)=>{
    setTodo((prevTodo)=>[...prevTodo,{id:crypto.randomUUID(),text:comingtext}])
  }
  
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center flex-column g-3">
        <NewTodo onAddTodo = {todoAddHandler} />
        <TodoList items={todo} />
      </Row>
    </Container>
  )
}

export default App