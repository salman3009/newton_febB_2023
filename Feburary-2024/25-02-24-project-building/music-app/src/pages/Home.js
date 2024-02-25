
import Sidebar from '../components/Sidebar';
import MusicCard from '../components/MusicCard';
import {useState,useEffect} from 'react';
import axios from 'axios';

function Home(){
    
   const [getData,setData] = useState([]);


   useEffect(()=>{
      musicList();
   },[])

   
   const musicList = async ()=>{
      try{
         const response = await axios.get('https://academics.newtonschool.co/api/v1/music/song',{
            headers:{
               projectID:'f104bi07c490'
            }
         })
         console.log(response.data.data);
         setData(response.data.data);
      }catch(err){
           console.log(err);
      }
     
   }



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