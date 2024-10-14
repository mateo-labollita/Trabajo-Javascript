const liga1 = {
    nombre: "Premier League",
    pais: "Inglaterra",
    equipos: "20"
};
const liga2 = {
    nombre: "LPF",
    pais: "Argentina",
    equipos: "28"
};
const liga3 = {
    nombre: "La Liga",
    pais: "España",
    equipos: "20"
};
const liga4 = {
    nombre: "Serie A",
    pais: "Italia",
    equipos: "20"
};
const liga5 = {
    nombre: "Bundesliga",
    pais: "Alemania",
    equipos: "18"
};

const ligas = [liga1, liga2, liga3, liga4, liga5];
let output = document.getElementById("output");

let ligafavorita;
let hincha;
const nacionalidad = "argentino";

function iniciarPreguntas() {
    ligafavorita = document.getElementById("ligaFavorita").value;
    hincha = document.getElementById("hincha").value;

    output.innerHTML += "Perfecto! Estamos con un " + nacionalidad + " fan de la " + ligafavorita + ", e hincha de " + hincha + ".<br>";

    ligaConMasEquipos(ligas);
    verificarPostPartido();
    verificarJuego();
    elegirJugador();
    jugadorPerfecto();
    fraseIconica();
    verificarJugadorFamoso();
    mejorEquipoLPF();
}

function ligaConMasEquipos(ligas) {
    let ligaMayor = ligas[0];
    for (const liga of ligas) {
        if (parseInt(liga.equipos) > parseInt(ligaMayor.equipos)) {
            ligaMayor = liga;
        }
    }
    output.innerHTML += `La liga con más equipos es ${ligaMayor.nombre} con ${ligaMayor.equipos} equipos.<br>`;
}

function verificarPostPartido() {
    let postpartido = parseInt(document.getElementById("postpartido").value);
    let mensaje = "";
    switch (postpartido) {
        case 1:
            mensaje = "Descansar y ducharte para relajar los músculos está muy bien, el cuerpo luego de una gran exigencia necesita frenar y recuperar energías.";
            break;
        case 2:
            mensaje = "Es una muy buena idea salir a comer algo! Hacer esto ayuda a liberar la mente y relajarnos psicológicamente luego de tanta concentración dedicada al partido.";
            break;
        case 3:
            mensaje = "Ir a entrenar no está bien, un desgaste físico tan alto requiere de un descanso posterior. Ya que sino pueden empezar a aparecer las lesiones.";
            break;
        default:
            mensaje = "Tu respuesta no está entre las opciones!";
            break;
    }
    output.innerHTML += mensaje + '<br>';
}

function verificarJuego() {
    let juego = document.getElementById("juego").value;
    let mensaje = "";
    if (juego == "En un club") {
        mensaje = "Qué alegría! Es un paso muy grande estar en un club.";
    } else if (juego == "Recreativamente") {
        mensaje = "Está muy bien! El fútbol recreativo es hermoso.";
    }
    output.innerHTML += mensaje + '<br>';
}

function elegirJugador() {
    const mejoresJugadores = ["Lionel Messi", "Cristiano Ronaldo", "Pelé", "Diego Maradona", "Johan Cruyff", "Zinedine Zidane"];
    mejoresJugadores.sort();
    let jugadorElegido = document.getElementById("jugadorElegido").value;
    output.innerHTML += "Claro! " + jugadorElegido + " es uno de los más talentosos! Buena elección.<br>";
}

function jugadorPerfecto() {
    let izquierda = document.getElementById("izquierda").value;
    let derecha = document.getElementById("derecha").value;
    let altura = document.getElementById("altura").value;
    let pase = document.getElementById("pase").value;

    const jugadorPerfecto = {
        izquierda,
        derecha,
        altura,
        pase
    };
    output.innerHTML += "Tu jugador perfecto tendría la izquierda de " + izquierda + ", la derecha de " + derecha + ", la pasaría como " + pase + " y sería alto como " + altura + ".<br>";
}

function fraseIconica() {
    let frase = document.getElementById("frase").value;
    output.innerHTML += frase + '<br>';
}

function verificarJugadorFamoso() {
    const jugadoresFamosos = ["Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappé", "Diego Maradona", "Neymar Jr", "Kun Agüero"];
    let nombreJugador = document.getElementById("nombreJugador").value;
    let resultado = esJugadorFamoso(nombreJugador, jugadoresFamosos);

    if (resultado) {
        output.innerHTML += `${nombreJugador} es un jugador famoso.<br>`;
    } else {
        output.innerHTML += `${nombreJugador} no es un jugador famoso.<br>`;
    }
}

function esJugadorFamoso(nombre, jugadoresFamosos) {
    return jugadoresFamosos.includes(nombre);
}

function mejorEquipoLPF() {
    let LPF = document.getElementById("LPF").value;
    let mensaje = "";
    switch (LPF) {
        case "Boca":
        case "River":
        case "Independiente":
        case "Racing":
        case "San Lorenzo":
            mensaje = "Gran elección! Estos cinco equipos son considerados por la mayoría como los más populares de Argentina.";
            break;
        default:
            mensaje = "Tu respuesta no está entre las opciones! Pero no hay ningún problema. Hay miles de equipos en el Futbol argentino, solo que estos cinco son los que la mayoria consideran los mejores.";
            break;
    }
    output.innerHTML += mensaje + '<br>';
}
