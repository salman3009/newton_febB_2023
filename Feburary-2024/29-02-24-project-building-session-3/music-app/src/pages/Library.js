import Sidebar from "../components/Sidebar";
import axios from 'axios';
import {useState,useEffect} from 'react';
import { useUser } from "../providers/UserProvider";
function Library(){

   const {getToken} = useUser();

   const listOfLibrary=()=>{
       axios.get('https://academics.newtonschool.co/api/v1/music/favorites/like',{
         headers: {
            projectID: 'f104bi07c490',
            Authorization:`Bearer ${getToken}`
          }
       }).then((result)=>{
           console.log(result.data)
       }).catch((err)=>{
           console.log(err);
       })
   }


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