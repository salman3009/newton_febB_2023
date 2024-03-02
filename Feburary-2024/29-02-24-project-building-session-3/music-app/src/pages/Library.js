import Sidebar from "../components/Sidebar";

function Library(){
    return(<>
    <div className="global-container">
          <div className="left-sidebar">
               <Sidebar/>
          </div>
          <div className="right-sidebar">
            <div className="music-container">
               
            </div>
            
          </div>
       </div>
    </>)
 }
 export default Library;