import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function initial(){
        try{
          let response = await fetch("https://randomuser.me/api/?results=10");
          let data = await response.json();
          data.results.map((obj)=>{
           setItems((old)=>[...old,obj.name.first])
          })
        }catch(err){

        }
    }

    useEffect(() => {
        initial();
        setTimeout(()=>{
            setLoading(false);
        },3000)
    }, []);

    return <Users isLoading={isLoading} items={items} />;
};

export default App;