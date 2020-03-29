let globalNames = ['Um','Dois','Três','Quatro'];
let inputName = null;
let isEditing = false;
let currentIndex = null;

window.addEventListener('load', () => {
  inputName = document.querySelector('#inputName');
  preventFormSubmit();
  activateInput();
  render();
});


function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  function insertName(newName) {
    //globalNames.push(newName);
    globalNames = [...globalNames, newName];
  }

  function updateName(newName) {
    globalNames[currentIndex] = newName;
  }

  // function clearInput() {
  //   inputName.value = null;
  //   inputName.focus();
  // }
   const clearInput = () => {
    inputName.value = null;
    inputName.focus();
   };

  function handleTyping(event) {
    
    var hasText = !!event.target.value && event.target.value.trim() !== '';

    if (!hasText) {
      clearInput();
      return;
    }

    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value);
      }
      isEditing = false;
      render();
      clearInput();
    }
  }

  inputName.addEventListener('keyup', handleTyping);
  inputName.focus();
}

function render() {
  function createDeleteIcon(index) {
    function handleDelete() {
      //globalNames.splice(index, 1); //Splice é uma função mutável.
      // globalNames = globalNames.filter((name, i) => {
      //   // if (i === index) {
      //   //   return false;
      //   // }
      //   // return true;
      //   return i !== index;
      // });
      globalNames = globalNames.filter((_, i) => i !== index); //Underscore usado para ignorar o parâmetro.
      render();
    }
    var i = document.createElement('i');
    i.classList.add("fa", "fa-trash", "fa-fw", "mr-2");
    i.addEventListener('click', handleDelete);
    return i;
  }

  function createEditIcon(index) {
    function handleEditIcon() {
      inputName.value = globalNames[index];
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }
    var i = document.createElement('i');
    i.classList.add("fa", "fa-edit", "fa-fw", "mr-2");
    i.addEventListener('click', handleEditIcon);
    return i;
  }


  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';

  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var li = document.createElement('li');
    li.appendChild(createEditIcon(i));
    li.appendChild(createDeleteIcon(i));
    li.appendChild(document.createTextNode(globalNames[i]));
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
}

