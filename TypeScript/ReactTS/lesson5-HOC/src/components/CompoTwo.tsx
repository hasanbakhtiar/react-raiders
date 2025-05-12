import { Button, Container } from "react-bootstrap"
import GenCompo from "./GenCompo";

const CompoTwo:React.FC = (props:any) => {
  const {count,inCount} = props;
  return (
    <Container>
        <p className="btn btn-outline-dark mt-3">{count}</p>
        <Button variant="info ms-3"  onClick={inCount}>+</Button>
    </Container>
  )
}

export default GenCompo(CompoTwo);