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
        var newP = document.createElement('p')

        newP.textContent = todoInputText;

        //create delete span (button) when creating Li
        var deletespan = document.createElement('span');
        deletespan.textContent = "X";

        //append p & span to li
        newLi.appendChild(newP);
        newLi.appendChild(deletespan);


        // append the li elm to ul
        mainList.appendChild(newLi);
        // console.log("done")

        // clear the input value
        inputBox.value = "";
        // console.log("cleared");

        deletespan.addEventListener("click", deleteLi);

    }
}


//Delete A TO-DO

function deleteLi(d) {
    d.target.parentElement.style.display = "none";
    // console.log(d)
}

