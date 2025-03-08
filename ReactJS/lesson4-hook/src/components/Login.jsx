import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const defaultUser = {
  email: "hasan@webluna.org",
  password: "hasan12345",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  useEffect(()=>{
    console.log("start");
    
  },[email]);

  const formSubmited = (e) => {
    e.preventDefault();
    if (check) {
      if (!email || !password) {
        Swal.fire({
          icon: "warning",
          title: "Please, fill inputs",
        });
      } else {
        if (email === defaultUser.email && password === defaultUser.password) {
          Swal.fire({
            icon: "success",
            title: "Login is successfully",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Email or password is wrong!",
          });
        }
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Please, accept our terms.",
      });
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <p className={`text-dark h2 mt-5`}>Login Page</p>
      <div className="col-4 mt-5">
        <form onSubmit={formSubmited}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={(e) => {
                setCheck(e.target.checked);
              }}
            />
            <label className="form-check-label">Terms and policy</label>
          </div>
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
