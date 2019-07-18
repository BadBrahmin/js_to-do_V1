var inputBox = document.querySelector("#input-todo");
var mainList = document.querySelector(".ulList")

inputBox.addEventListener("keydown", add);

// ADD TO-DO Code

function add(e) {
    if (e.keyCode == 13) {
        // store the input value
        var todoInputText = inputBox.value;

        // using the value create a li elem
        var newLi = document.createElement('li');
        newLi.textContent = todoInputText;
        // console.log(newLi)

        // append the li elm to ul
        mainList.appendChild(newLi);     // Append <li> to <ul> 
        // console.log("done")

        // clear the input value
        inputBox.value = "";
        // console.log("cleared");

    }
}

