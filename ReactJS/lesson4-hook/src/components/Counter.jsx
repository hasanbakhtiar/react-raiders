import { useState } from "react";

const Counter = () => {
  const [count,setCount] = useState(0);

  const increment = ()=>{
      setCount(count+1);
  }
  
  
  return (
    <div className="container mt-5">
      <h1>
        <button className={`btn btn-${count>0?"danger":"dark"}`} onClick={()=>{
          if (count>0) {
            setCount(count-1)
          }
        }}>-</button>
        <span className="mx-3">{count}</span>
        <button className="btn btn-success" onClick={increment}>+</button>
      </h1>
    </div>
  );
};

export default Counter;
