import {Link} from 'react-router-dom';
import { useUser } from '../providers/UserProvider';

function Navbar(){

  const {getToken,getName} = useUser();

    return(<>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><i class="fa-solid fa-music"></i><span className="icon-music">Music</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
    </ul>
    <li className="nav-item dropdown my-2 my-lg-0 left-nav">
        <div className="nav-link dropdown-toggle"  role="button" data-toggle="dropdown" aria-expanded="false">
          {getName?getName:"Profile"}
        </div>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/login">Login</Link>
          <Link className="dropdown-item" to="/register">Register</Link> 
        </div>
      </li>
  </div>
</nav>
    </>)
 }
 export default Navbar;