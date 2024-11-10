
//Obtém os elementos do formulário
const appContainer = document.getElementById("app-container");
const itemInput = document.getElementById("item");
const addItemButton = document.getElementById("addItemButton");
const listContainer = document.getElementById("list-container");

//Função para adicionar o item na lista
function addItem() {

  const itemInputValue = itemInput.value.trim();
  
  if (itemInputValue === '') {
    alert("Informe um item para continuar!");
  } else {
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

    buttonDelete.addEventListener('click', function() {
      listContainer.removeChild(itemContainer);
    
      const messageContainer = document.createElement('div');
      messageContainer.classList.add("message-container");
      
      const messageItems = document.createElement('div');
      messageItems.classList.add("message-items");
      messageItems.innerHTML = '<img src="assets/warning.svg" alt="Ícone de atenção">';
    
      const spanText = document.createElement('span');
      spanText.textContent = 'O item foi removido da lista';

      const buttonClose = document.createElement('button');
      buttonClose.classList.add('close-btn');
      buttonClose.innerHTML = '<img src="assets/exit.svg" alt="Ícone de fechar">';

      messageItems.appendChild(spanText);

      messageContainer.appendChild(messageItems);
      messageContainer.appendChild(buttonClose);
      appContainer.appendChild(messageContainer);

      buttonClose.addEventListener('click', function() {
        appContainer.removeChild(messageContainer);
      });

    });

    groupContainer.appendChild(checkbox);
    groupContainer.appendChild(itemText);

    itemContainer.appendChild(groupContainer);
    console.log("Adicionou elementos no item container");

    itemContainer.appendChild(buttonDelete);
    console.log("Adicionou elementos no group container");

    listContainer.appendChild(itemContainer);
    console.log("Adicionou elementos no list container");

    itemInput.value = '';
  }

}

//Capturando o evento do botao
addItemButton.addEventListener('click', addItem);

