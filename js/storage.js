const respuestas = {};
const inputs = [
    "ligaFavorita", 
    "hincha", 
    "postpartido", 
    "juego", 
    "jugadorElegido", 
    "izquierda", 
    "derecha", 
    "altura", 
    "pase", 
    "frase", 
    "nombreJugador", 
    "LPF"
];
document.getElementById("boton").addEventListener("click", () => {
    inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            respuestas[inputId] = input.value.trim();
            input.value = ""; // limpiar campo
        }
    });
    localStorage.setItem("respuestas", JSON.stringify(respuestas));
});
document.getElementById("mostrarRespuestas").addEventListener("click", () => {
    const outputDiv = document.getElementById("output");
    const respuestasGuardadas = JSON.parse(localStorage.getItem("respuestas"));
    if (outputDiv.style.display === "none" || outputDiv.style.display === "") {
        outputDiv.innerHTML = ""; // limpiar salida
        if (respuestasGuardadas) {
            for (const [key, value] of Object.entries(respuestasGuardadas)) {
                const respuestaDiv = document.createElement("div");
                respuestaDiv.innerHTML = `<p><strong>${key}:</strong> ${value}</p>`;
                
                const btnEditar = document.createElement("button");
                btnEditar.textContent = "Editar";
                btnEditar.onclick = () => editarRespuesta(key, value);
                respuestaDiv.appendChild(btnEditar);
                const btnEliminar = document.createElement("button");
                btnEliminar.textContent = "Eliminar";
                btnEliminar.onclick = () => eliminarRespuesta(key);
                respuestaDiv.appendChild(btnEliminar);
                outputDiv.appendChild(respuestaDiv);
            }
        } else {
            outputDiv.innerHTML = "<p>No hay respuestas guardadas.</p>";
        }
        outputDiv.style.display = "block"; // mostrar respuestas
    } else {
        outputDiv.style.display = "none"; // ocultar respuestas
    }
});
function editarRespuesta(key, value) {
    document.getElementById(key).value = value; // rellenar campo
    eliminarRespuesta(key); // eliminar respuesta
}
function eliminarRespuesta(key) {
    const respuestasGuardadas = JSON.parse(localStorage.getItem("respuestas"));
    delete respuestasGuardadas[key]; // eliminar la respuesta especifica
    localStorage.setItem("respuestas", JSON.stringify(respuestasGuardadas)); // actualizar el localstorage
    document.getElementById("mostrarRespuestas").click(); // actualizar la vista de las respuestas
}

