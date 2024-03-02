import { Link } from 'react-router-dom';
import { useUser } from '../providers/UserProvider';

function Navbar() {

  const { getToken, getName, onTokenHandler, onNameHandler } = useUser();

  const logoutHandler = () => {
    onTokenHandler(null);
    onNameHandler(null);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
  }

  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/"><i class="fa-solid fa-music"></i><span className="icon-music"></span></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
        </ul>
        <li className="nav-item dropdown my-2 my-lg-0 left-nav">
          <div className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
            {getName ? getName : "Profile"}
          </div>
          <div className="dropdown-menu">
            {getToken && <>
              <Link className="dropdown-item" onClick={logoutHandler} to="/login">Logout</Link>
            </>}
            {!getToken && <>
              <Link className="dropdown-item" to="/login">Login</Link>
              <Link className="dropdown-item" to="/register">Register</Link>
            </>}

          </div>
        </li>
      </div>
    </nav>
  </>)
}
export default Navbar;