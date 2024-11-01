// array de objetos
const ligas = [
    { nombre: "Premier League", pais: "Inglaterra", equipos: "20" },
    { nombre: "LPF", pais: "Argentina", equipos: "28" },
    { nombre: "La Liga", pais: "España", equipos: "20" },
    { nombre: "Serie A", pais: "Italia", equipos: "20" },
    { nombre: "Bundesliga", pais: "Alemania", equipos: "18" }
];

// generar cards de ligas
function generarCards() {
    const cardsContainer = document.getElementById("cardsContainer");
    ligas.forEach(liga => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${liga.nombre}</h3>
            <p>País: ${liga.pais}</p>
            <p>Equipos: ${liga.equipos}</p>
        `;
        cardsContainer.appendChild(card);
    });
}

// llamado a la funcion para generar las cards al ser cargada la pagina
document.addEventListener("DOMContentLoaded", generarCards);


