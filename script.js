
let idUsuario = 1; 

function agregarTarea() {
    let usuario = document.getElementById("usuario").value.trim();
    let tarea = document.getElementById("tarea").value.trim();

    if (usuario === "" || tarea === "") {
        alert("Por favor, complete ambos campos.");
        return;
    }

    let tabla = document.getElementById("tablaTareas");
    let nuevaFila = tabla.insertRow();
    nuevaFila.insertCell(0).innerText = idUsuario;
    nuevaFila.insertCell(1).innerText = usuario;
    nuevaFila.insertCell(2).innerText = tarea;

    idUsuario++; 
    document.getElementById("usuario").value = "";
    document.getElementById("tarea").value = "";
}
