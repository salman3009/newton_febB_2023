import {useEffect, useState} from 'react';

function useFetch(url){

   const [data,setData] = useState(null);
   const [loading,setLoading] = useState(true);
   const [error,setError] = useState(null);

   useEffect(()=>{
       initalLoad();
   },[url])

   const initalLoad= async()=>{
    try{
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        setData(data);
    }catch(err){
         console.log(err);
        setError("exception occured");
    }finally{
         setLoading(false);
    }     
   }
  
   return {data,loading,error}
}

export default useFetch;