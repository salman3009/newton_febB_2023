async function fetchMovies(){
    try{
        let response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1');
        response = await response.json();
        console.log(response.results);
    }catch(err){
           console.log(err);
    }   
}

fetchMovies();