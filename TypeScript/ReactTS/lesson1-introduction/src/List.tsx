import {  useState } from 'react';
import {propType} from '../types/prop';
import { v4 as uuidv4 } from 'uuid';

const List:React.FC<propType> = ({itemOne,itemTwo,itemThree}) => {
    const [data,setData] = useState<string | number>("Hello");
  return (
    <ul>
        {data}
        <li>{itemOne}</li>
        <li>{itemTwo}</li>
        <li>{itemThree}</li>
        <li><button onClick={()=>setData(uuidv4())}>change</button></li>
    </ul>
  )
}

export default List