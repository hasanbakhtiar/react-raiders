import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users'
import axios from "axios";

const App = () => {
  const [users,setUsers] = useState([]);
  const getUsers =(comingkey)=>{
      axios.get(`https://api.github.com/search/users?q=${comingkey}`)
      .then(res=>setUsers(res.data.items))
  }

  return (
    <div>
      <Header />
      <Search comingData={getUsers} checkData={users}/>
      <Users usersdata={users}/>
    </div>
  )
}

export default App