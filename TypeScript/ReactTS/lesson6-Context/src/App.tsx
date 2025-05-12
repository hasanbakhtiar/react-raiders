import { useContext } from "react"
import { DataContext } from "./context/DataContext"

const App = () => {
  const {mycomment}:any = useContext(DataContext)
  return (
    <ul>
      {mycomment===undefined?<h1>Loading...</h1>:mycomment.map((item:any)=>(
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

export default App