// Storing content div in a variable 
let content = document.getElementById("content");

// Creating empty array which helps to delete & store the data in local & session storage
let saveData = [];
let keys = [];

// If local storage contains data add them in above array 
if (localStorage.getItem("data")) {
  saveData = JSON.parse(localStorage.getItem("data"));
  keys = JSON.parse(localStorage.getItem("key"));
}

// Calling renderApi fn. for each of the data (User-Solution) and showing them on UI
for (let i = 0; i < saveData.length; i++) {
    renderApi(saveData[i]);   
}

// renderApi fn works to render the API response on history page
function renderApi(data) {
    let item = document.createElement("div");
    item.className = "item";
    item.id = data.id;
    let q = document.createElement("p");
    q.className = "question";
    q.textContent = `${data.operation} : ${data.expression}`;
    item.appendChild(q);
    let ans = document.createElement("p");
    ans.className = "ans";
    ans.textContent = data.result;
    item.appendChild(ans);
    let span = document.createElement("span");
    span.className = "material-symbols-outlined delete-Icon";
    span.textContent = "delete";
    span.onclick = deleteL;

    // 38 - 39 ??????? 
    item.appendChild(span);
    content.appendChild(item);
  }

  // deleteL fn will be invoked when user click on delete-icon
  function deleteL() {
    let parentElement = this.parentElement;
    let parentId = parentElement.id;
    parentElement.remove();
    let index = keys.indexOf(parentId);
    keys.splice(index,1);
    saveData.splice(index,1);

    // After deleting the particular div, Resetting the local storage data 
    localStorage.setItem("data",JSON.stringify(saveData));
    localStorage.setItem("key",JSON.stringify(keys));
  }