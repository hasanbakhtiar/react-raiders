import { Button, Col, ListGroup } from "react-bootstrap"
import { todoType } from "../types/todo.model"

interface todoListProps{
    items:todoType[]
}


const TodoList: React.FC<todoListProps> = ({items}) => {
    return (
        <Col sm={6}>
            <hr />
            <ListGroup>
                {items.length===0?<p className="text-center">You dont have any to do.</p>:items.map((item:todoType,index:number)=>(
                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center"><span style={{ fontSize: "22px", fontWeight: "bold" }}>{item.text}</span> <Button variant="danger">X</Button></ListGroup.Item>
                ))}
            </ListGroup>
        </Col>
    )
}

export default TodoList