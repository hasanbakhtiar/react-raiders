import { useRef, useContext } from 'react';
import axios from 'axios';
import { BaseUrlContext } from '../../context/BaseUrlContext.tsx';
import Swal from 'sweetalert2';
const Register = () => {
  const [baseUrl, header] = useContext(BaseUrlContext);

  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const formSubmit = (e) => {
    e.preventDefault();
    if (!emailRef.current.value || !passRef.current.value) {
      window.alert('Please fill inputs');
    } else {
      axios
        .post(
          `${baseUrl}/register`,
          {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passRef.current.value,
          },
          header
        )
        .then((res) => {
          Swal.fire({
            title: 'Account created successfully!',
            text: "Congratulations!",
            icon: 'success',
          });
          setTimeout(() => {
            window.location.assign('/login');
          }, 2000);
        })
        .catch((err) => {
          console.log(err);

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
      <h1 className="my-5">Register Page</h1>
      <form onSubmit={formSubmit} className="col-6 mt-5">
        <div className="mb-3">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input ref={nameRef} type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Surname</label>
            <input ref={surnameRef} type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input ref={phoneRef} type="tel" className="form-control" />
          </div>
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

export default Register;
