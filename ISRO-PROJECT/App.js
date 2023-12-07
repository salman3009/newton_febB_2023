
async function allCenters() {
    let response = await fetch("https://isro.vercel.app/api/centres");
    let data = await response.json();
    data = data.centres;
    return data;
}
allCenters();

let inputText = document.querySelector(".input-text");
let inputNode = inputText.value;
let searchBar = document.querySelector("#btn");
let searchResult = document.querySelector("#search-result");
let tableNode = document.querySelector(".table-text");
let nameNode = document.querySelector("#name");
let placeNode = document.querySelector("#place");
let stateNode = document.querySelector("#state");

async function bindingName() {
    //console.log(input);
    let input = await allCenters();
    tableBinding(input);
}

bindingName();

function tableBinding(input){
    let list = input.map(function (data) {
        return `<tr>
        <th>CENTER</TH>
        <th>CITY</TH>
        <th>STATE</TH>
    </tr><tr>
                <td>${data.name}</td>
                <td>${data.Place}</td>
                <td>${data.State}</td>
                </tr>`
    });
  

    tableNode.innerHTML += `<tbody>
       ${list}
    </tbody>`
}

async function filterHandler(type){
   console.log(type);
   let input = document.querySelector("#search-details").value.toLowerCase();;
   console.log(input);
   tableNode.innerHTML = '';
   let data = await allCenters();
   let filterData = data.filter(function(data){
        if(type == 'city'){
             return data.Place.toLowerCase().includes(input);
            //return data.Place.toLowerCase() === input;
        }
        else if(type == 'center'){
            return data.name.toLowerCase().includes(input);
        }
        else if(type == 'state'){
            return data.State.toLowerCase().includes(input);
        }
   })
   tableBinding(filterData);

}