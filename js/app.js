const httpRequest = ()=>{
    //consumiendo api de jsonpleholder
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(json=>{
        console.log(json.nombre.autor.año);
        let data = "";
        json.forEach(element => {
            data += `<div class="col-lg-6"><img class="img-fluid" src="assets/img/demo-image-01.jpg" alt="..." /></div>
            <div class="col-lg-6">
                <div class="bg-black text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-left">
                            <h4 class="text-white">${element.nombre.autor.año}</h4>
                            <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                            <hr class="d-none d-lg-block mb-0 ms-0" />
                        </div>
                    </div>
                </div>
            </div>`;
            console.log(element.nombre.autor.año);
        });
        document.querySelector('.cuerpo').innerHTML = data;
    })

}
httpRequest();