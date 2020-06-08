function initialMessage(){
    var acceptedInitialMessage = window.localStorage.getItem("acceptedInitialMessage");
    while (!acceptedInitialMessage) {
        acceptedInitialMessage = confirm("Welcome! This page will allow you to create lists!\n " +
        "Data will be stored in your browser. Press O.K. if you're okay with that!");
        window.localStorage.setItem("acceptedInitialMessage", acceptedInitialMessage);
    }

    loadPage();
}

function loadPage(){
    document.getElementById("pageContents").style = "visibility:visible";

    if(window.localStorage.getItem("itemsArray")){
      window.itemsArray = JSON.parse(window.localStorage.getItem("itemsArray"));
    }
    else{
      window.itemsArray = [];
    }

    for (var i = 0 ; i < window.itemsArray.length; i++){
        showItem(i);
    }
}

function clearData(){
    if(confirm("Warning! This will clear all local storage! Continue?")){
        window.localStorage.clear();
        location.reload();
    }
}

function addItem(input){
    window.itemsArray.push(input);
    window.localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
    showItem(window.itemsArray.length - 1);
}

function showItem(index){
    if(window.itemsArray[index] != ''){
        var newItem = document.createElement("tr");
        var itemNameCell = newItem.insertCell(0);
        var removeButtonCell = newItem.insertCell(1);

        itemNameCell.innerText = " • " + window.itemsArray[index];
        removeButtonCell.innerHTML = "<button onclick='removeItem(" + index + ");'>x</button>";
        document.getElementById("listDisplay").appendChild(newItem);
        document.getElementById("textInput").value = "";
    }
}

function removeItem(index){
  document.getElementById("listDisplay").innerHTML = "";

  window.itemsArray.splice(index,1);
  window.localStorage.setItem("itemsArray", JSON.stringify(itemsArray));

  for (var i = 0 ; i < window.itemsArray.length; i++){
    showItem(i);
  }
}