import axios from "axios";
import { useEffect, useMemo, useState } from "react"


const AppUseMemo: React.FC = () => {
    const [user, setUser] = useState<any[]>([]);
    const [email, setEmail] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUser(res.data));
    }, []);

    const getUserList = () => {
        console.log("user running!");

        return user.map(item => (
            <li key={item.id} onClick={() => { setEmail(item.email) }}>{item.name}</li>
        ))
    }
    const userRow = useMemo(() => getUserList(), [email])
    return (
        <div>
            {email}
            <ul>
                {userRow}
            </ul>
            <hr />
            {count}
            <button onClick={() => {
                console.log("count");
                setCount(count + 1)
            }}>+</button>
        </div>
    )
}

export default AppUseMemo