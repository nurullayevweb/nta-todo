var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elBtn = document.querySelector(".js-btn");
var elList = document.querySelector(".js-list");



elBtn.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (elInput.value == "") {
        alert("Maydonni to'ldiring oka");
        return;
    };

    var array = [];
    array.push(elInput.value);

    for (var i = 0; i < array.length; i++) {
        var editBtn = document.createElement("button");
        editBtn.textContent = "edited";
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        var listItem = document.createElement("li");
        listItem.append(array[i]);
        listItem.append(deleteBtn);
        listItem.append(editBtn);
        elList.appendChild(listItem);
        array.innerHTML = "";
    }
});