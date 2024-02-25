
import Sidebar from '../components/Sidebar';
import MusicCard from '../components/MusicCard';


function Home(){
    
   

    return(<>
       <div className="global-container">
          <div className="left-sidebar">
               <Sidebar/>
          </div>
          <div className="right-sidebar">
               <MusicCard/>
          </div>
       </div>
    </>)
 }
 export default Home;