const codigo = document.getElementById("cod")
const nombre = document.getElementById("mane")
const autor = document.getElementById("aut")
const editorial = document.getElementById("edi")
const tema = document.getElementById("tema")
const numero_edicion = document.getElementById("num_edi")
const categoria = document.getElementById("cate")
const precio = document.getElementById("pre")
const estado = document.getElementById("est")
const obcervacion = document.getElementById("obc")
const stock = document.getElementById("stock")


Form.addEventListener("sumit", e=>{
    e.preventDefault()
    let warnings = ""
    if(codigo.ariaValueMax.length <2){
       warnings += 'Codigo muy corto <br> '
    }
})


