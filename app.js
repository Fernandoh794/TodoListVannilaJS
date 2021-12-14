const button = document.querySelector(".adicionar");
let ValorInput = document.querySelector(".caixaTexto");
let ListElements = document.querySelector(".list");

const arr = [];

function renderTodo() {
  // rendeizar os elementos na tela

  ListElements.innerHTML = "";
  arr.forEach((item, index) => {
    // Percorrer o array
    var todoElement = document.createElement("li"); // criar os elementos da lista dinamicamente
    var todoText = document.createTextNode(item);

    var linkli = document.createElement("a");
    var textLink = document.createTextNode("Excluir");
    linkli.setAttribute("href", "#");
    linkli.setAttribute('onclick', 'deleteItem('+ index +') ')


    linkli.appendChild(textLink);
    

    todoElement.appendChild(linkli);
    todoElement.appendChild(todoText);
    ListElements.appendChild(todoElement);
  });
}

function limparInput() {
  ValorInput.value = "";
}
function addItem() {
  var itemTexto = ValorInput.value;
  console.log(itemTexto);
  arr.push(itemTexto);
  renderTodo();
}

function deleteItem(pos) {
    arr.splice(pos, 1);
    renderTodo();
    
}

button.addEventListener("click", addItem);
button.addEventListener("click", limparInput);
