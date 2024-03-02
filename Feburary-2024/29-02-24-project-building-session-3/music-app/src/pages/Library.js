import Sidebar from "../components/Sidebar";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUser } from "../providers/UserProvider";
function Library() {

   const { getToken } = useUser();
   const [getList, setList] = useState([]);

   useEffect(() => {
      listOfLibrary();
   }, [])

   const listOfLibrary = () => {
      axios.get('https://academics.newtonschool.co/api/v1/music/favorites/like', {
         headers: {
            projectID: 'f104bi07c490',
            Authorization: `Bearer ${getToken}`
         }
      }).then((result) => {
         console.log(result.data.data.songs)
         setList(result.data.data.songs);
      }).catch((err) => {
         console.log(err);
      })
   }


   return (<>
      <div className="global-container">
         <div className="left-sidebar">
            <Sidebar />
         </div>
         <div className="right-sidebar">
            <div className="music-container">
                  {getList.map((obj,index) => {
                     return (<div  key={index} className="musicCard">
                        <img
                           src={obj.thumbnail}
                           height={"150"}
                           width={"150"}
                           className="bannerImg"
                        />
                        <div className="music-title">{obj.title}</div>
                     </div>)
                  })}
            </div>

         </div>
      </div>
   </>)
}
export default Library;