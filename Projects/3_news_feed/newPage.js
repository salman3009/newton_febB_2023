function filterNews(category) {
  // Make an API request to retrieve the news data
  fetch("https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews")
    .then((response) => response.json())
    .then((data) => {
      const filteredNews = category ? data.filter((news) => news.category === category) : data;
      renderNewsCards(filteredNews);
    })
    .catch((error) => {
      console.error("Error fetching news data:", error);
    });
}

function renderNewsCards(newsData) {
  // console.log("Your function is working!");
  const newsContainer = document.getElementById("news-container");

  // Clear existing news cards
  newsContainer.innerHTML = "";

  // Generate HTML for each news card
  newsData.forEach((news) => {
    const card = document.createElement("div");
    card.classList.add("news-card");
    // const card = document.createElement("div");

   // Add category and publisher name
const categoryPublisherElement = document.createElement("div");
categoryPublisherElement.classList.add("auth_cat");

const authorElement = document.createElement("span");
authorElement.innerHTML = "BY <strong>" + news.author + "</strong>";

const categoryElement = document.createElement("span");
categoryElement.innerHTML = "CATEGORY <strong>" + news.category + "</strong>";

categoryPublisherElement.appendChild(authorElement);
categoryPublisherElement.appendChild(categoryElement);

card.appendChild(categoryPublisherElement);

    // Add content
    const contentElement = document.createElement("div");
contentElement.classList.add("content");
contentElement.textContent = news.content;

const contentWrapper = document.createElement("div");
contentWrapper.appendChild(contentElement);

// Add "Read More" link
const readMoreLink = document.createElement("a");
readMoreLink.href = news.url;
readMoreLink.textContent = "Read More";
contentWrapper.appendChild(readMoreLink);

card.appendChild(contentWrapper);

    // Create like button
const likeButton = document.createElement("button1");
likeButton.classList.add("like_btn");
likeButton.innerHTML = `<i id="${news.id}" class="far fa-heart"></i>`;
likeButton.addEventListener("click", () => {
  news.liked = !news.liked;
  const heartButton = document.getElementById(news.id);
  heartButton.classList.toggle("fas");
  heartButton.classList.toggle("far");
  heartButton.classList.toggle("red"); 
  saveToLocalStorage(newsArray);
});

// Append like button to card
card.appendChild(likeButton);

    // Append the news card to the container
    newsContainer.appendChild(card);

    console.log(card);
  });
}

filterNews("");