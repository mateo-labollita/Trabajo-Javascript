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
    "LPF", 
    "fechaNacimiento", 
    "clubesJugados"
];

document.getElementById("boton").addEventListener("click", () => {
    inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            respuestas[inputId] = input.value.trim();
            input.value = ""; 
        }
    });
    localStorage.setItem("respuestas", JSON.stringify(respuestas));
    mostrarRespuestas(); 
});

document.getElementById("mostrarRespuestas").addEventListener("click", mostrarRespuestas);

function mostrarRespuestas() {
    const outputDiv = document.getElementById("output");
    const respuestasGuardadas = JSON.parse(localStorage.getItem("respuestas"));
    if (outputDiv.style.display === "none" || outputDiv.style.display === "") {
        outputDiv.innerHTML = ""; 
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
        outputDiv.style.display = "block"; 
    } else {
        outputDiv.style.display = "none"; 
    }
}

function editarRespuesta(key, value) {
    document.getElementById(key).value = value; 
    eliminarRespuesta(key); 
}

function eliminarRespuesta(key) {
    const respuestasGuardadas = JSON.parse(localStorage.getItem("respuestas"));
    delete respuestasGuardadas[key]; 
    localStorage.setItem("respuestas", JSON.stringify(respuestasGuardadas)); 
    mostrarRespuestas(); 
}



