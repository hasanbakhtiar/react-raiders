import { useRef, useContext } from 'react';
import axios from 'axios';
import { BaseUrlContext } from '../../context/BaseUrlContext.tsx';
import Swal from 'sweetalert2';
import { useCookies } from 'react-cookie';
const Login = () => {
  const [baseUrl, header] = useContext(BaseUrlContext);

  const [cookies, setCookie, removeCookie] = useCookies(['ecommerce']);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const formSubmit = (e) => {
    e.preventDefault();
    if (!emailRef.current.value || !passRef.current.value) {
      window.alert('Please fill inputs');
    } else {
      axios
        .post(
          `${baseUrl}/auth`,
          {
            email: emailRef.current.value,
            password: passRef.current.value,
          },
          header
        )
        .then((res) => {
          setCookie('ecommerce', {
            id: res.data.id,
            name: res.data.name,
            surname: res.data.surname,
            email: res.data.email,
            phone: res.data.phone,
          });
          setCookie('token', {
            token: res.data.token,
          });
          Swal.fire({
            title: 'Login successfully!',
            text: 'Congratulations!',
            icon: 'success',
          });
        })
        .catch((err) => {
          Swal.fire({
            title: 'Something is wrong!',
            text: err.response.data,
            icon: 'error',
          });
        });
    }
  };
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
