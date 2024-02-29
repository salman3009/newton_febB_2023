
import Sidebar from '../components/Sidebar';
import MusicCard from '../components/MusicCard';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { MusicPlayer } from '../components/MusicPlayer';

function Home(){
    
   const [getData,setData] = useState([]);
   const [getMusic,setMusic] = useState(null);


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


   const onMusicHandler=(id)=>{
      console.log(id);
   }

    return(<>
       <div className="global-container">
          <div className="left-sidebar">
               <Sidebar/>
          </div>
          <div className="right-sidebar">
            <div className="music-container">
            {
               getData.map((obj,index)=>{
                  return ( <MusicCard
                     key={index}
                     title={obj.title}
                     thumbnail={obj.thumbnail}
                     artist = {obj.artist}
                     id={index}
                     onMusicHandler={onMusicHandler}
                   />)
                 
               })
            }    
            </div>
            
          </div>
       </div>
       {getMusic && (<MusicPlayer
          title={getMusic.title}
          thumbnail={getMusic.thumbnail}
          artist={getMusic.artist}
          audio_url={getMusic.audio_url}
       />)}

    </>)
 }
 export default Home;