
import {Link} from 'react-router-dom';

function Sidebar() {
   return (<>
      <ul class="list-group">
         <li class="list-group-item"><Link to='/'>Home</Link></li>
         <li class="list-group-item"><Link to='/library'>Library</Link></li>
      </ul>
   </>)
}
export default Sidebar;