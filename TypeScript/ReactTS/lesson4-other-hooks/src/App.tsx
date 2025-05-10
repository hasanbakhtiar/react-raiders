import { BrowserRouter, Route, Routes } from "react-router-dom"
import Filter from "./components/Filter"

const App:React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Filter/>} path="/"></Route>
          <Route element={<Filter/>} path="/:cat"></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App