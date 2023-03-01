const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#enter');
const botonCheck = "fa-solid fa-circle-check";
const botonNoCheck = "fa-regular fa-circle";
const textoTachado = "tarea-hecha"
var id = 0;

// AGREGAR TAREA

function crearTarea(tarea, id, realizado, eliminado) {

    if(eliminado){
        return
    }

    const REALIZADO = realizado ? botonCheck : botonNoCheck;
    const LINE = realizado ? textoTachado : "";

    const elemento = `<li><i class=${REALIZADO}></i>
    <p class="text ${LINE}">${tarea}</p>
    <i class="fas fa-trash de" data="eliminado" id="0"></i></li>`;
    lista.insertAdjacentHTML("beforeend", elemento);
}

botonEnter.addEventListener("click", () => {
    const textoTarea = input.value;
    if (textoTarea) {
        crearTarea(textoTarea, id, false, false);
    }
    input.value = "";
    id++;
    console.log(id)
});

document.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        const textoTarea = input.value;
        if (textoTarea) {
            crearTarea(textoTarea,id,false,false);
        }
        input.value = "";
        id++;
        console.log(id)
    }
});

// TAREA TERMINADA

lista.addEventListener("click", (event) => {
    const element = event.target;
    console.log(element);
    const elementData = element.attributes;
    console.log(elementData);
})
