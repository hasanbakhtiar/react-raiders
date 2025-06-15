import { Outlet, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoute = () => {
  const [cookies, setCookie] = useCookies();
  const authUserToken = () => {
    const token = cookies.token;
    if (!token) {
      return false;
    } else {
      return true;
    }
  };
  if (authUserToken()) {
    return <Outlet />;
  } else {
    return <Navigate to={'/login'} />;
  }
};

export default PrivateRoute;
