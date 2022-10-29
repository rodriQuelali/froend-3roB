
const API_URL = 'http://localhost:3000/libros';
let libros = [];
let deleteId = null;

window.addEventListener('DOMContentLoaded', () => {
  getlibros();
})

const getlibros = () => {
  fetch(API_URL)
  .then(response => response.json())
  .catch(error => {
    alertManager('error', 'Ocurrión un problema al cargar los libros');
  })
  .then(data => {
    libros = data.data;
    renderResult(libros);
  })
}

const librosList = document.querySelector('#librosList');

const renderResult = (libros) => {
  let listHTML = "";
  libros.forEach(libro => {
    listHTML += `
      <div class="card">
        <div>Codigo: ${libro.Codigo}</div>
        <div>Titulo: ${libro.Titulo}</div>
        <div>Autor: ${libro.Autor}</div>
        <div>Fecha: ${libro.Fecha}</div>
        <div>Editorial: ${libro.Editorial}</div>
        <div class="options">
          <button type="button" onclick="editlibro(${libro.Id})">Editar</button>
          <button type="button" onclick="openModalConfirm(${libro.Id})">Eliminar</button>
        </div>
      </div>
    `
  })
  librosList.innerHTML = listHTML;
}

const createlibro = () => {
  const formData = new FormData(document.querySelector('#formAdd'));

  if(!formData.get('codigo').length || !formData.get('titulo') || !formData.get('autor') || !formData.get('fecha') || !formData.get('editorial')) {
    document.querySelector('#msgFormAdd').innerHTML = '* Llena todos los campos';
    return;
  }
  document.querySelector('#msgFormAdd').innerHTML = '';

  const libro = {
    Codigo: formData.get('codigo'),
    Titulo: formData.get('titulo'),
    Autor: formData.get('autor'),
    Fecha: formData.get('fecha'),
    Editorial: formData.get('editorial'),
  }

  console.log(libro)

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(libro),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(error => {
    alertManager('error', error);
    document.querySelector('#formAdd').reset();
  })
  .then(response => {
    alertManager('success', response.mensaje)
    getlibros();
  })
}

const editlibro = (id) => {
  let libro = {};
  libros.filter(prod => {
    if(prod.Id == id){
      libro = prod
    }
  });

  document.querySelector('#formEdit #ID').value = libro.Id;
  document.querySelector('#formEdit #codigo').value = libro.Codigo;
  document.querySelector('#formEdit #titulo').value = libro.Titulo;
  document.querySelector('#formEdit #autor').value = libro.Autor;
  document.querySelector('#formEdit #fecha').value = libro.Fecha;
  document.querySelector('#formEdit #editorial').value = libro.Editorial;

  console.log(libro);
  openModalEdit();
}

const updatelibro = () => {
  const libro = {
    Codigo: document.querySelector('#formEdit #codigo').value,
    Titulo: document.querySelector('#formEdit #titulo').value,
    Autor: document.querySelector('#formEdit #autor').value,
    Fecha: document.querySelector('#formEdit #fecha').value,
    Editorial: document.querySelector('#formEdit #editorial').value,
    Id: document.querySelector('#formEdit #ID').value,
  }

  if(!libro.Codigo || !libro.Titulo || !libro.Autor || !libro.Fecha || !libro.Editorial) {
    document.querySelector('#msgFormEdit').innerHTML = '* Los campos no deden estar vacios';
    return;
  }
  document.querySelector('#msgFormEdit').innerHTML = '';

  fetch(API_URL, {
    method: 'PUT',
    body:JSON.stringify(libro),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(error => {
    alertManager('error', error);
  })
  .then(response => {
    alertManager('success', response.mensaje);
    getlibros();
  });
  document.querySelector('#formEdit').reset();
}

const deletelibro = (id) => {

  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .catch(error => {
    alertManager('error', error);
  })
  .then(response => {
    alertManager('success', response.mensaje);
    closeModalConfirm();
    getlibros();
    deleteId = null;
  })

}

const confirmDelete = (res) => {
  if(res){
    deletelibro(deleteId);
  } else {
    closeModalConfirm();
  }
}



// MODAL ADD MANAGER
/** --------------------------------------------------------------- */
const btnAdd = document.querySelector('#btnAdd');
const modalAdd = document.querySelector('#modalAdd');

btnAdd.onclick = () => openModalAdd();

window.onclick = function(event) {
  if (event.target == modalAdd) {
    //modalAdd.style.display = "none";
  }
}

const closeModalAdd = () => {
  modalAdd.style.display = 'none';
}

const openModalAdd = () => {
  modalAdd.style.display = 'block';
}

// MODAL ADIT MANAGER
/** --------------------------------------------------------------- */
const modalEdit = document.querySelector('#modalEdit');

const openModalEdit = () => {
  modalEdit.style.display = 'block';
}

const closeModalEdit = () => {
  modalEdit.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modalEdit) {
    //modalEdit.style.display = "none";
  }
}

// MODAL CONFIRM MANAGER
/** --------------------------------------------------------------- */
const modalConfirm = document.getElementById('modalConfirm');

window.onclick = function(event) {
  if (event.target == modalConfirm) {
    modalConfirm.style.display = "none";
  }
}

const closeModalConfirm = () => {
  modalConfirm.style.display = 'none';
}

const openModalConfirm = (id) => {
  deleteId = id;
  modalConfirm.style.display = 'block';
}


/** ALERT */
const alertManager = (typeMsg, message) => {
  const alert = document.querySelector('#alert');

  alert.innerHTML = message || 'Se produjo cambios';
  alert.classList.add(typeMsg);
  alert.style.display = 'block';

  setTimeout(() => {
    alert.style.display = 'none';
    alert.classList.remove(typeMsg);
  }, 3500);

}