// Getting unique id for local storage
alert("hello");
//import { v4 as uuidv4 } from "https://jspm.dev/uuid";  

// Selecting content element and storing it in variable [HTML Line:43]
let content = document.getElementById("content");

// Selecting searchIcon element and storing it in variable
let searchIcon = document.getElementById("searchIcon");


// Creating array of object which will store api response object and uuid
let saveData = [];

// Creating array which will store uuid
let keys = [];

// If local storage contains any data store it in saveData array & keys aaray
if (localStorage.getItem("data")) {
  saveData = JSON.parse(localStorage.getItem("data"));
  keys = JSON.parse(localStorage.getItem("key"));
}

// Creating a fn. which is called when search-icon is clicked
function getValue() {

  // Storing the input value in a variable
  // encodeURIComponent() is a JavaScript function that encodes a string so that it can be safely included in a URL
  let userValue = encodeURIComponent(
    document.querySelector("#problem-input").value
  );

  // Storing the selected category in a variable
  let category = document.querySelector("#category-select").value;

  // fetchinf API to get response
  let apiUrl = `https://newton.now.sh/api/v2/${category}/${userValue}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => renderApi(data));
}
let id =0;
  // The response we get from API how it should be on UI for that below function is created
function renderApi(data) {
  debugger;
  // Creating a div which will show the solution in desired format
  let item = document.createElement("div");

  // Setting the class of div
  item.className = "item";

  // Setting the id of div
  // uuidv4() is a JavaScript function that generates a random unique identifier that can be used to identify data in computer systems 
  item.id = id++;

  // creating a p tag named q
  let q = document.createElement("p");

  // Setting the id of q
  q.className = "question";

  // Setting the text-content for q
  q.textContent = `${data.operation} : ${data.expression}`;

   
  // Syntax (parentElement.appendChild(HTML child element))
  // Showing q tag on UI
  item.appendChild(q);

  //  Just after p tag, creating one more p tag
  let ans = document.createElement("p");
  ans.className = "ans";
  ans.textContent = data.result;
  item.appendChild(ans);  // Showing ans tag on UI

  // Just after 2nd "p" tag adding delete-icon
  let span = document.createElement("span");
  span.className = "material-symbols-outlined delete-Icon";
  span.textContent = "delete";

  //  Adding an on-click event to delete-icon & calling a fn. named "deleteL"
  span.onclick = deleteL;
  item.appendChild(span);

  // item element inserted inside the content div [HTML Line:43]
  // This will insert the new element before the first child of the content div, which will make it the first element in the div.
  // The latest result will be seen first
  content.insertBefore(item, content.firstChild); // Showing item tag on UI

  // In API response object adding uuid through spread operator by creating new object
  let obj = {
    id: item.id,
    ...data
  };

  // Adding the object(API response & uuid) in saveData[Array of object]
  saveData.push(obj);

  // Adding the element(uuid) in keys[Line:15] 
  keys.push(item.id);

  // Setting the data in local storage in both the array[saveData & keys] through setItem
  localStorage.setItem("data",JSON.stringify(saveData));
  localStorage.setItem("key",JSON.stringify(keys));
}

// Writing function which will be called when user click on delet-icon
function deleteL() {
    let parentElement = this.parentElement;

    // Selecting parentElement id (div's id) which is generated through uuid() fn.
    let parentId = parentElement.id;

    // removing parentElement (whole div container)
    parentElement.remove();

    // selecting index of id which is stored in keys[Line:15]
    let index = keys.indexOf(parentId);

    // deleting that particular id through splice() method
    keys.splice(index,1);

    // Deleting that particular id from saveData[Line:12]
    saveData.splice(index,1);

    // Resetting the data in local storage in both the array[saveData & keys] through setItem
    localStorage.setItem("data",JSON.stringify(saveData));
    localStorage.setItem("key",JSON.stringify(keys));
}

// Adding "click" event on search-icon and calling a fn. named "getValue" 
searchIcon.addEventListener("click", getValue);
