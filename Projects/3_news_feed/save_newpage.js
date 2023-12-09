
document.addEventListener("DOMContentLoaded", function(){

    const newContainer = document.getElementById("news_content");

    fetch("https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews").then(response => response.json()).then(data => {
        renderNews(data);
        // console.log(data);
    })
    .catch(error => {
        console.log(error);
    })

    function renderNews(newsArray){

        newsArray.forEach(function (news) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("news-card");

            newDiv.innerHTML = `
            <div>
            <div>
            BY  ${news.author}
            </div>

            <div>
            CATEGORY${news.category}
            </div>
            
            </div>
                 
                <p>${news.content}<a href="${news.url}" target="_blank">Read More</a></p>
                
                <i id="${news.id}" class="far fa-heart"></i>    
            `;

            const heartButton = newDiv.querySelector(`#${news.id}`);
            heartButton.addEventListener("click", () => {
                news.liked = !news.liked;
                heartButton.classList.toggle("fas");
                heartButton.classList.toggle("far");
                heartButton.classList.toggle("red"); 
                 saveToLocalStorage(newsArray);
            });

            newContainer.appendChild(newDiv);

        })
        
    }

})