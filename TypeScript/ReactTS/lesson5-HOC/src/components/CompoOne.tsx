import { Button, Container } from "react-bootstrap"
import GenCompo from "./GenCompo";

const CompoOne:React.FC = (props:any) => {
    const {count,inCount} = props;
  return (
    <Container>
        <p className="btn btn-outline-warning mt-3">{count}</p>
        <Button variant="success ms-3"  onClick={inCount}>+</Button>
    </Container>
  )
}

export default GenCompo(CompoOne);