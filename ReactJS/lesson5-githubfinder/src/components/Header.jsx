import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
<nav className="navbar bg-dark navbar-dark">
  <div className="container-fluid d-flex justify-content-center">
    <a className="navbar-brand" href="https://github.com" target='_blank'><FaGithub /> Github Finder</a>
  </div>
</nav>

  )
}

export default Header