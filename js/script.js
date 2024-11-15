const API_KEY = "03531b13a0ef4a7fb08f02b0fbf26aef"; 

document.getElementById("verificarJugador").addEventListener("click", async () => {
    const nombreJugador = document.getElementById("nombreJugador").value.trim();
    const jugadorInfoDiv = document.getElementById("jugadorInfo");

    if (nombreJugador) {
        try {
            const response = await axios.get(`https://api.football-data.org/v4/players`, {
                headers: { 'X-Auth-Token': API_KEY },
                params: { name: nombreJugador }
            });

            if (response.data.players.length > 0) {
                const jugador = response.data.players[0]; 
                jugadorInfoDiv.innerHTML = `
                    <p><strong>${jugador.name}</strong> es un jugador famoso. Aquí tienes más información:</p>
                    <p>Posición: ${jugador.position}</p>
                    <p>Equipo: ${jugador.team.name}</p>
                    <p>Fecha de Nacimiento: ${jugador.dateOfBirth}</p>
                    <p>País: ${jugador.nationality}</p>
                    <p>Goles: ${jugador.goals}</p>
                    <p>Asistencias: ${jugador.assists}</p>
                `;
            } else {
                jugadorInfoDiv.innerHTML = `<p>${nombreJugador} no se encuentra en la base de datos de Football-Data.org.</p>`;
            }
        } catch (error) {
            jugadorInfoDiv.innerHTML = `<p>Error al verificar al jugador. Intenta nuevamente.</p>`;
            console.error(error);
        }
    } else {
        jugadorInfoDiv.innerHTML = `<p>Por favor, ingresa el nombre de un jugador.</p>`;
    }
});

document.getElementById("boton").addEventListener("click", () => {
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const mensajeEdad = document.getElementById("mensajeEdad");

    if (fechaNacimiento) {
        const edad = calcularEdad(fechaNacimiento);
        if (edad > 18) {
            mensajeEdad.innerHTML = `<p>Lamentablemente, con tu edad, es difícil conseguir una prueba en un buen club. Te recomendamos que busques firmar contrato, o algo oficial con algún club más "accesible", y desde ahí poder iniciar tu carrera!</p>`;
        } else {
            mensajeEdad.innerHTML = `<p>Excelente, tu edad es la ideal para probarse en un club hasta de gran nivel! Busca y consulta por pruebas. ¡Éxitos!</p>`;
        }
    }
});

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const fecha = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth();
    const dia = hoy.getDate();

    if (mes < fecha.getMonth() || (mes === fecha.getMonth() && dia < fecha.getDate())) {
        edad--;
    }

    return edad;
}
