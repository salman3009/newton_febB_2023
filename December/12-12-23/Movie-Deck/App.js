
let movies=[];
async function fetchMovies(page){
    try{
        let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`);
        response = await response.json();
        console.log(response.results);
        movies = response.results;
        renderMovies(response.results)
    }catch(err){
           console.log(err);
    }   
}

fetchMovies(1);


function renderMovies(movies){
       //<ul></ul>
    let parent = document.querySelector("#movie-list");
 
    parent.innerHTML = '';
    movies.map((input)=>{
        //<ul><li></li></ul>
        let listItem = document.createElement('li');
        listItem.className = "card";
        listItem.innerHTML += `
         <img
         class="poster"
         alt="movie-title"
         src=${'https://image.tmdb.org/t/p/original/'+input.poster_path}
         />
         <p class="title">${input.title}</p>
         <section class="vote-favouriteIcon">
           <section class="vote">
               <p class="vote-count">Votes:${input.vote_count}</p>
               <p class="vote-average">Rating:${input.vote_average}</p>
           </section>
           <i class="fa-regular fa-heart fa-2xl favorite" id="${input.title}"></i>
         </section>
      `;
      const favouriteButton = listItem.querySelector(".favorite");
      favouriteButton.addEventListener('click',(event)=>{
         console.log(event.target.id);
      })
      parent.appendChild(listItem);
    })
}

//sort-by-date 
let sortByDateButton = document.querySelector("#sort-by-date");
let sortByDateorder = true;
function sortByDate(){

    if(sortByDateorder){
        sortByDateorder = false;
        let result = movies.sort((a,b)=>{
            return new Date(a.release_date) - new Date(b.release_date);
        })
        sortByDateButton.textContent = "Sort by date (latest to oldest)";
        renderMovies(result);
    }
    else{
        sortByDateorder = true;
        let result = movies.sort((a,b)=>{
            return new Date(b.release_date) - new Date(a.release_date);
        })
        sortByDateButton.textContent = "Sort by date (oldest to latest)";
        renderMovies(result);
    }
    
}
sortByDateButton.addEventListener('click',sortByDate);


let sortByRateButton = document.querySelector("#sort-by-rating");
let sortByRateorder = true;

function sortByRate(){
    if(sortByDateorder){
        sortByDateorder = false;
        let result = movies.sort((a,b)=>{
            return (a.vote_average) - (b.vote_average);
        })
        console.log(result);
        sortByRateButton.textContent = "Sort by rate (least to most)";
        renderMovies(result);
    }else{
        sortByDateorder = true;
        let result = movies.sort((a,b)=>{
            return (b.vote_average) - (a.vote_average);
        })
       
        sortByRateButton.textContent = "Sort by rating (most to least)";
        renderMovies(result);
    }

}

sortByRateButton.addEventListener('click',sortByRate);

//part-4
//pagination logic 
let prevButton = document.querySelector("#prev-button");
let pageNumberButton = document.querySelector("#page-number-button");
let nextButton = document.querySelector("#next-button");
let currentPage = 1;
prevButton.disabled = true;

prevButton.addEventListener("click",()=>{
    currentPage--;
    fetchMovies(currentPage);
    pageNumberButton.textContent = `Current Page: ${currentPage}`;
    if(currentPage ==1){
        prevButton.disabled = true;
        nextButton.disabled = false;
    }
    if(currentPage == 2){
        nextButton.disabled = false;
        prevButton.disabled = false;
     }
});

nextButton.addEventListener("click",()=>{
     currentPage++;
     fetchMovies(currentPage);
     pageNumberButton.textContent = `Current Page: ${currentPage}`;
     if(currentPage == 3){
        nextButton.disabled = true;
        prevButton.disabled = false;
     }
     if(currentPage == 2){
        nextButton.disabled = false;
        prevButton.disabled = false;
     }
});



//search functionality
//part-5
async function searchMovie(movieName){
    try{
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=f531333d637d0c44abc85b3e74db2186&include_adult=false&language=en-US&page=1`);
        response = await response.json();
        console.log(response.results);
        movies = response.results;
        renderMovies(response.results)
    }catch(err){
           console.log(err);
    }   
}


let searchButton = document.querySelector("#search-button");
let searchInput = document.querySelector("#search-input");
let pagination = document.querySelector(".pagination");
searchButton.addEventListener("click",()=>{
  let input = searchInput.value;
  searchMovie(input);
  pagination.style.display = "none";

})
