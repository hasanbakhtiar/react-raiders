import { useRef, useContext, useState } from 'react';
import axios from 'axios';
import { BaseUrlContext } from '../../context/BaseUrlContext.tsx';
import Swal from 'sweetalert2';
import { useCookies } from 'react-cookie';

const Account: React.FC = () => {
  const [cookies, setCookie,removeCookie] = useCookies();
  const [name, setName] = useState<string>(cookies.ecommerce.name);
  const [surname, setSurname] = useState<string>(cookies.ecommerce.surname);
  const [email, setEmail] = useState<string>(cookies.ecommerce.email);
  const [phone, setPhone] = useState<string>(cookies.ecommerce.phone);
  const [baseUrl, header] = useContext(BaseUrlContext);
  const formSubmit = (e) => {
    e.preventDefault();
    if (!name || !surname || !email || !phone) {
      Swal.fire({
        title: 'Please fill input!',
        icon: 'warning',
      });
    } else {
      axios
        .put(
          `${baseUrl}/user/${cookies.ecommerce.id}`,
          {
            name: name,
            surname: surname,
            email: email,
            phone: phone,
          },
          header
        )
        .then((res) => {
          removeCookie('ecommerce');
          setCookie('ecommerce', {
            id:res.data._id,
            name: name,
            surname: surname,
            email: email,
            phone: phone,
          });
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Account</h1>
      <form onSubmit={formSubmit} className="col-6 mt-5">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            defaultValue={name}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Surname</label>
          <input
            onChange={(e) => setSurname(e.target.value)}
            defaultValue={surname}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={email}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            defaultValue={phone}
            type="text"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-warning">
          Update
        </button>
      </form>
    </div>
  );
};

export default Account;
