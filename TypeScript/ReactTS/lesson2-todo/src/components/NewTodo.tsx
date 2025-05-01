import { useRef } from "react"
import { Button, Col, Form } from "react-bootstrap"
import Swal from "sweetalert2";

interface addTodoType{
    onAddTodo:(comingtext:string)=>void
}

const NewTodo: React.FC<addTodoType> = ({onAddTodo}) => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!inputRef.current!.value) {
            Swal.fire({
                title: "Please fill input",
                icon: "warning"
            });
        }else{
            onAddTodo(inputRef.current!.value);
            inputRef.current!.value="";
        }

    }
    return (
        <Col sm={6} >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <p className="h2 mt-5 mb-5 text-light bg-dark p-2 text-center" style={{ borderRadius: "20px" }}>Add new to do</p>
                    <Form.Control ref={inputRef} type="text" className="py-3" placeholder="Enter todo" />
                </Form.Group>
                <Button type="submit">Add</Button>
            </Form>
        </Col>
    )
}

export default NewTodo