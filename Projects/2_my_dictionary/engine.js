const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const icon = document.getElementById("fa-fa-icon");
const input = document.getElementById("search-input");
const wordHeading = document.getElementById("word-heading");
const definition = document.getElementById("definition");
const historyButton = document.getElementById("history-btn");
const deleteIcon = document.getElementById("font-awesome-icon");
const historyPage = document.getElementById("history-page");
const wordCardsContainer = document.getElementById("word-cards");

icon.addEventListener("click", () => {
  const inputValue = input.value;
  fetch(`${api}${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      const word = data[0].word;
      const def = data[0].meanings[0].definitions[0].definition;

      wordHeading.innerText = word;
      definition.innerText = def;

      const searchHistory = localStorage.getItem("searchHistory") || "[]";
      const searchHistoryArray = JSON.parse(searchHistory);
      searchHistoryArray.push(word);
      localStorage.setItem("searchHistory", JSON.stringify(searchHistoryArray));
    });
});

deleteIcon.addEventListener("click", () => {
  const word = wordHeading.innerText;

  const searchHistory = localStorage.getItem("searchHistory");
  if (searchHistory) {
    const searchHistoryArray = JSON.parse(searchHistory);
    const updatedSearchHistory = searchHistoryArray.filter((item) => item !== word);
    localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));
  }

  wordHeading.innerText = "";
  definition.innerText = "";
});

historyButton.addEventListener("click", () => {
  // Show history page
  historyPage.style.display = "block";
  // Clear previous word cards
  wordCardsContainer.innerHTML = "";

  const searchHistory = localStorage.getItem("searchHistory");
  if (searchHistory) {
    const searchHistoryArray = JSON.parse(searchHistory);

    searchHistoryArray.forEach((searchWord) => {
      fetch(`${api}${searchWord}`)
        .then((response) => response.json())
        .then((data) => {
          const word = data[0].word;
          const def = data[0].meanings[0].definitions[0].definition;

          const wordCard = createWordCard(word, def);
          wordCardsContainer.appendChild(wordCard);

          const deleteButton = wordCard.querySelector(".delete-button");
          deleteButton.addEventListener("click", () => {
            deleteWordCard(word);
          });
        });
    });
  } else {
    console.log("No search history found.");
  }
});

function createWordCard(word, definition) {
  const wordCard = document.createElement("div");
  wordCard.className = "word-card";

  const wordHeading = document.createElement("h2");
  wordHeading.innerText = word;

  const definitionPara = document.createElement("p");
  definitionPara.innerText = definition;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

  wordCard.appendChild(wordHeading);
  wordCard.appendChild(definitionPara);
  wordCard.appendChild(deleteButton);

  return wordCard;
}

function deleteWordCard(word) {
  const searchHistory = localStorage.getItem("searchHistory");
  if (searchHistory) {
    const searchHistoryArray = JSON.parse(searchHistory);
    const updatedSearchHistory = searchHistoryArray.filter((item) => item !== word);
    localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));

    const wordCards = document.querySelectorAll(".word-card");
    wordCards.forEach((card) => {
      const cardWord = card.querySelector("h2").innerText;
      if (cardWord === word) {
        wordCardsContainer.removeChild(card);
      }
    });
  }
}

// THIS IS A DIFFERENT FUNCTIONALTILY CODE DONT USE IT // historyButton.addEventListener("click", () => {
//   // Show history page
//   historyPage.style.display = "block";
//   // Clear previous word cards
//   wordCardsContainer.innerHTML = "";

//   const searchHistory = localStorage.getItem("searchHistory");
//   if (searchHistory) {
//     const searchHistoryArray = JSON.parse(searchHistory);
//     searchHistoryArray.forEach((searchWord) => {
//       const wordCard = createWordCard(searchWord);
//       wordCardsContainer.appendChild(wordCard);
//     });
//   } else {
//     console.log("No search history found.");
//   }
// });

// function createWordCard(word) {
//   const wordCard = document.createElement("div");
//   wordCard.className = "word-card";

//   const wordHeading = document.createElement("h2");
//   wordHeading.innerText = word;

//   const deleteButton = document.createElement("button");
//   deleteButton.className = "delete-button";
//   deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
//   deleteButton.addEventListener("click", () => {
//     deleteWordCard(word);
//   });

//   wordCard.appendChild(wordHeading);
//   wordCard.appendChild(deleteButton);

//   return wordCard;
// }

// function deleteWordCard(word) {
//   const searchHistory = localStorage.getItem("searchHistory");
//   if (searchHistory) {
//     const searchHistoryArray = JSON.parse(searchHistory);
//     const updatedSearchHistory = searchHistoryArray.filter((item) => item !== word);
//     localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));
//   }

//   // Remove the word card from the container
//   const wordCards = document.getElementsByClassName("word-card");
//   for (let i = 0; i < wordCards.length; i++) {
//     const cardHeading = wordCards[i].getElementsByTagName("h2")[0];
//     if (cardHeading.innerText === word) {
//       wordCardsContainer.removeChild(wordCards[i]);
//       break;
//     }
//   }
// }
// historyButton.addEventListener("click", () => {
//   // Show history page
//   historyPage.style.display = "block";
//   // Clear previous word cards
//   wordCardsContainer.innerHTML = "";

//   const searchHistory = localStorage.getItem("searchHistory");
//   if (searchHistory) {
//     const searchHistoryArray = JSON.parse(searchHistory);
//     const uniqueSearchHistory = [...new Set(searchHistoryArray)]; // Remove duplicates

//     uniqueSearchHistory.forEach((searchWord) => {
//       fetch(`${api}${searchWord}`)
//         .then((response) => response.json())
//         .then((data) => {
//           const word = data[0].word;
//           const def = data[0].meanings[0].definitions[0].definition;

//           const wordCard = createWordCard(word, def);
//           wordCardsContainer.appendChild(wordCard);
//         });
//     });
//   } else {
//     console.log("No search history found.");
//   }
// });


// function createWordCard(word, definition) {
//   const wordCard = document.createElement("div");
//   wordCard.className = "word-card";

//   const wordHeading = document.createElement("h2");
//   wordHeading.innerText = word;

//   const definitionPara = document.createElement("p");
//   definitionPara.innerText = definition;

//   const deleteButton = document.createElement("button");
//   deleteButton.className = "delete-button";
//   deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
//   deleteButton.addEventListener("click", () => {
//     deleteWordCard(word);
//   });

//   wordCard.appendChild(wordHeading);
//   wordCard.appendChild(definitionPara);
//   wordCard.appendChild(deleteButton);

//   return wordCard;
// }