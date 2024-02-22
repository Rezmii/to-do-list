const buttonElement = document.querySelector(".to-do-button");
const inputElement = document.querySelector(".to-do-input");
const ulElement = document.querySelector(".to-do-ul");

buttonElement.addEventListener("click", addToList);
inputElement.addEventListener("keydown", checkEnter);

function checkEnter(e) {
  let inputElementValue = inputElement.value;
  if (inputElementValue.length > 0 && e.key === "Enter") {
    addToList();
  }
}

function addToList() {
  let inputElementValue = inputElement.value;
  if (inputElementValue.length > 0) {
    let liElement = document.createElement("li");
    let pElement = createParElement(inputElementValue);
    liElement.classList.add("to-do-li");
    liElement.appendChild(pElement);
    ulElement.appendChild(liElement);

    addButton(liElement);
    inputElement.value = "";
    inputElement.focus();
  }
}

function createParElement(inputElementValue) {
  let pElement = document.createElement("p");
  let pElementNode = document.createTextNode(inputElementValue);
  pElement.appendChild(pElementNode);
  createLiEventListener(pElement);
  return pElement;
}

function addButton(liElement) {
  let buttonElement = document.createElement("button");
  buttonElement.textContent = "X";
  buttonElement.classList.add("li-button");
  liElement.appendChild(buttonElement);
  createButtonEventListener(buttonElement, liElement);
}

function createLiEventListener(liElement) {
  liElement.addEventListener("click", () => {
    markTaskDone(liElement);
  });
}

function createButtonEventListener(buttonElement, liElement) {
  buttonElement.addEventListener("click", () => {
    deleteListElement(liElement);
  });
}

function markTaskDone(liElement) {
  liElement.classList.toggle("done");
}

function deleteListElement(liElement) {
  liElement.remove();
}
