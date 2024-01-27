const axios = require('axios');
//import axios from 'axios'; in es6

function initial(){
    axios.get('https://fakestoreapi.com/products').then((response)=>{
             console.log(response.data);
    }).catch((error)=>{
            console.log(error);
    })
}
initial();