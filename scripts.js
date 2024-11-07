
//Obtém os elementos do formulário
const form = document.querySelector("form");
const itemInput = document.getElementById("item");
const addItemButton = document.getElementById("addItemButton");
const listContainer = document.getElementById("list-container");


//Função para adicionar o item na lista
function addItem() {

  const itemInputValue = itemInput.value.trim();
  
  if (itemInputValue !== '') {
    console.log("Item informado: " + itemInput.value);

    const itemContainer = document.createElement("ul");
    itemContainer.classList.add("item-container");
    console.log("Criou item container");

    const groupContainer = document.createElement("div");
    groupContainer.classList.add("group-container");
    console.log("Criou group container");

    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.classList.add('item');
    console.log("Criou checkbox");

    const itemText = document.createElement('label');
    itemText.classList.add('item-label');
    itemText.textContent = itemInputValue;
    console.log("Criou itemText");
    
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-btn');
    buttonDelete.innerHTML = '<img src="assets/delete.svg" alt="Deletar">';
    console.log("Criou button delete");

    groupContainer.appendChild(checkbox);
    groupContainer.appendChild(itemText);
    groupContainer.appendChild(buttonDelete);
    console.log("Adicionou elementos no group container");

    itemContainer.appendChild(groupContainer);
    console.log("Adicionou elementos no item container");

    listContainer.appendChild(itemContainer);
    console.log("Adicionou elementos no list container");

    itemInput.value = '';
  }

}

//Capturando o evento do botao
addItemButton.addEventListener('click', addItem);