fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

  const edit = (id) => {
    let product = {};
    products.filter(prod =>{
        if(prod.Id == id){
            product = prod
        }
    });


    document.querySelector('#formEdit #codigo').value = product.Codigo;
    document.querySelector('#formEdit #nombre').value = product.Nombre;
    document.querySelector('#formEdit #autor').value = product.Autor;
    document.querySelector('#formEdit #editorial').value = product.Editorial;
    document.querySelector('#formEdit #tema').value = product.Tema;
    document.querySelector('#formEdit #num_edicion').value = product.Num_edicion;
    document.querySelector('#formEdit #categoria').value = product.Categoria;
    document.querySelector('#formEdit #precio').value = product.Precio;
    document.querySelector('#formEdit #estado').value = product.Estado;
    document.querySelector('#formEdit #observacion').value = product.Observacion;
    document.querySelector('#formEdit #stock').value = product.Stock;
  








}





