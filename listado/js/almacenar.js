document.addEventListener("DOMContentLoaded", function () {
    const agregarBtn = document.getElementById("agregar");
    const eliminarBtn = document.getElementById("limpiar");
    const contenedorUl = document.getElementById("contenedor");
    const itemInput = document.getElementById("item");
    const arrayItems = JSON.parse(localStorage.getItem("items")) || []; //Carga lo que esta almacenado en la variable itemg uardada en   local Storage
    const eliminarBtnUltimoElemento = document.getElementById("limpiarUltimo");

    actualizarLista();
    agregarBtn.addEventListener("click", agregarItem);
    eliminarBtn.addEventListener("click", eliminarTodo);
    eliminarBtnUltimoElemento.addEventListener("click", eliminarUltimo);
    itemInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            agregarItem();
        }
    });


    function agregarItem() {
        const nuevoItem = itemInput.value;
        if (nuevoItem !== "") {
            arrayItems.push(nuevoItem);
            localStorage.setItem("items", JSON.stringify(arrayItems));
            actualizarLista();
            itemInput.value = ""; //Resetea el campo de texto (Mrkaos no te olvides pa la proxima.)
        }
    }
    // Elimina trodos los elementos
    function eliminarTodo() {
        if (arrayItems.length > 0) {
            arrayItems.splice(0, arrayItems.length);
            localStorage.setItem("items", JSON.stringify(arrayItems));
            actualizarLista();
        }
    }
    // Eliminar ultimo elemento agregado
    function eliminarUltimo() {
        if (arrayItems.length > 0) {
            arrayItems.pop();
            localStorage.setItem("items", JSON.stringify(arrayItems));
            actualizarLista();
        }
    }
    // escribir en el contenedor todo lo que hay en arrayItems (el listado)
    function actualizarLista() {
        contenedorUl.innerHTML = "";
        arrayItems.forEach(function (item) {
            const elementoApendar = document.createElement("li");
            elementoApendar.classList.add("list-group-item");
            elementoApendar.textContent = item;
            contenedorUl.appendChild(elementoApendar);
        });
    }
});