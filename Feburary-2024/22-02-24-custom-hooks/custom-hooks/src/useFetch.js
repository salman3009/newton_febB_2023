import {useEffect, useState} from 'react';

function useFetch(url){

   const [data,setData] = useState([]);
   const [loading,setLoading] = useState(false);

   useEffect(()=>{
       initalLoad();
   },[url])

   const initalLoad= async()=>{
    try{
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        setData(data);
        setLoading(false);
    }catch(err){

    }     
   }

   return {data,loading}
}

export default useFetch;