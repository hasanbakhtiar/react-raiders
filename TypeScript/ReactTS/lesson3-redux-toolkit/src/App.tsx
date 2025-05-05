import { useRef } from "react";
import { Col, Container, Button } from "react-bootstrap"
import Swal from "sweetalert2";
import { add } from "./features/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null >(null);
    const dispatch = useAppDispatch();
    const data = useAppSelector((p: any) => p.todo);
    const handleForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputRef.current!.value) {
            Swal.fire({
                title: "Please, fill input",
                icon: "warning"
            });
        } else {
            dispatch(add(inputRef.current!.value));
            inputRef.current!.value = "";
        }
    }
    return (
        <Container className="mt-5">
            <Col sm="3">
                <form onSubmit={handleForm} className="mb-3">
                    <input ref={inputRef} type="text" className="form-control" />
                    <Button type="submit" variant="dark" className="mt-3">add</Button>
                </form>
                <ul className="list-group">
                    {data.map((item:any) => (

                        <li key={item.id} className="list-group-item">{item.text}</li>
                    ))}
                </ul>
            </Col>
        </Container>
    )
}

export default App