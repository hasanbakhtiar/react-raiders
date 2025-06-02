import { useRef,useContext } from 'react';
import axios from 'axios';
import {BaseUrlContext} from '../../context/BaseUrlContext.tsx';

const Login = () => {
  const [baseUrl, header] = useContext(BaseUrlContext);

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const formSubmit = (e)=>{
    e.preventDefault();
    if (!emailRef.current.value || !passRef.current.value) {
      window.alert("Please fill inputs")
    } else {
      
    axios.post(`${baseUrl}/auth`,{
      email:emailRef.current.value,
      password:passRef.current.value
    },header)
    .then(res=>console.log(res)
    ).catch(err=>{
      window.alert(err.response.data)
    }
    )
    }

  }
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Login Page</h1>
      <form onSubmit={formSubmit} className="col-6 mt-5">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input ref={emailRef} type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input ref={passRef} type="password" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
