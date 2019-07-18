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

        //create checkbox element 
        var tickTick = document.createElement('input')
        // console.log("tickTick")
        tickTick.type = "checkbox";

        //create delete span (button) when creating Li
        var deletespan = document.createElement('span');
        deletespan.textContent = "X";

        //append p & span to li
        newLi.appendChild(tickTick);
        newLi.appendChild(newP);
        newLi.appendChild(deletespan);


        // append the li elm to ul
        mainList.appendChild(newLi);
        // console.log("done")

        // clear the input value
        inputBox.value = "";
        // console.log("cleared");

        deletespan.addEventListener("click", deleteLi);
        tickTick.addEventListener("click", tickTickStatus);

    }
}


//Delete A TO-DO

function deleteLi(d) {
    d.target.parentElement.style.display = "none";
    // console.log(d)
}

//checkbox functions 

function tickTickStatus(t) {
    t.target.parentElement.style.setProperty("text-decoration", "line-through");;
}



//backgroundChanger 
var bgColor = document.body.style.background;
document.addEventListener("keydown", change);

function change(e) {
    //   document.body.style.background = `#${Math.floor(Math.random() * 16777215)}`;
    bgColor = `#` + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.background = bgColor;
    button.textContent = bgColor;
    console.log(e);
}
