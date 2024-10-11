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
for (const liga of ligas) {
    console.log(liga);
}

let ligafavorita;
let hincha;
const nacionalidad = "argentino";

function iniciarPreguntas() {
    ligafavorita = document.getElementById("ligaFavorita").value;
    hincha = document.getElementById("hincha").value;

    console.log("Perfecto! Estamos con un " + nacionalidad + " fan de la " + ligafavorita + ", e hincha de " + hincha + ".");
    console.log("Te haremos algunas preguntas sobre fútbol, tus gustos, y algunas cosas más.");
    
    ligaConMasEquipos(ligas);
    verificarPostPartido();
    verificarJuego();
    elegirJugador();
    jugadorPerfecto();
    fraseIconica();
    verificarJugadorFamoso();
    mejorEquipoLPF();
}

// Función para encontrar la liga con más equipos
function ligaConMasEquipos(ligas) {
    let ligaMayor = ligas[0];
    for (const liga of ligas) {
        if (parseInt(liga.equipos) > parseInt(ligaMayor.equipos)) {
            ligaMayor = liga;
        }
    }
    console.log(`La liga con más equipos es ${ligaMayor.nombre} con ${ligaMayor.equipos} equipos.`);
}

// Función para verificar post partido
function verificarPostPartido() {
    let postpartido = parseInt(document.getElementById("postpartido").value);
    switch (postpartido) {
        case 1:
            alert("Descansar y ducharte para relajar los músculos está muy bien, el cuerpo luego de una gran exigencia necesita frenar y recuperar energías.");
            break;
        case 2:
            alert("Es una muy buena idea salir a comer algo! Hacer esto ayuda a liberar la mente y relajarnos psicológicamente luego de tanta concentración dedicada al partido.");
            break;
        case 3:
            alert("Ir a entrenar no está bien, un desgaste físico tan alto requiere de un descanso posterior. Ya que sino pueden empezar a aparecer las lesiones.");
            break;
        default:
            alert("Tu respuesta no está entre las opciones!");
            break;
    }
}

// Función para verificar si juega al fútbol
function verificarJuego() {
    let juego = document.getElementById("juego").value;
    if (juego == "En un club") {
        console.log("Qué alegría! Es un paso muy grande estar en un club para poder progresar profesionalmente en el fútbol. Te deseamos el mayor de los éxitos y a entrenar con todas las ganas, que es lo único que no puede faltar.");
    } else if (juego == "Recreativamente") {
        console.log("Está muy bien! El fútbol recreativo es hermoso, solamente que si queremos progresar profesionalmente, debemos alejarnos de él y acercarnos a los clubes; ya que con ellos va a ser más fácil crecer en cuanto a nuestra carrera!");
    }
}

// Función para elegir mejor jugador
function elegirJugador() {
    const mejoresJugadores = ["Lionel Messi", "Cristiano Ronaldo", "Pelé", "Diego Maradona", "Johan Cruyff", "Zinedine Zidane"];
    mejoresJugadores.sort();
    let jugadorElegido = document.getElementById("jugadorElegido").value;

    console.log("Claro! " + jugadorElegido + " es uno de los más talentosos! Buena elección.");
}

// Función para definir jugador perfecto
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
    console.log("Tu jugador perfecto tendría la izquierda de " + izquierda + ", la derecha de " + derecha + ", la pasaría como " + pase + " y sería alto como " + altura);
}

// Función para ingresar frase icónica
function fraseIconica() {
    let frase = document.getElementById("frase").value;
    console.log(frase);
}

// Función para verificar si un jugador es famoso
function verificarJugadorFamoso() {
    const jugadoresFamosos = ["Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappé", "Diego Maradona", "Neymar Jr", "Kun Agüero"];
    let nombreJugador = document.getElementById("nombreJugador").value;
    let resultado = esJugadorFamoso(nombreJugador, jugadoresFamosos);

    if (resultado) {
        console.log(`${nombreJugador} es un jugador famoso.`);
    } else {
        console.log(`${nombreJugador} no es un jugador famoso.`);
    }
}

function esJugadorFamoso(nombre, jugadoresFamosos) {
    return jugadoresFamosos.includes(nombre);
}

// Función para el mejor equipo de la liga
function mejorEquipoLPF() {
    let LPF = document.getElementById("LPF").value;
    switch (LPF) {
        case "Boca":
        case "River":
        case "Independiente":
        case "Racing":
        case "San Lorenzo":
            console.log("Gran elección! Estos cinco equipos son considerados por la mayoría como los más populares de Argentina.");
            break;
        default:
            alert("Tu respuesta no está entre las opciones! Pero no hay ningún problema, no hay una respuesta correcta; cada uno tiene su opinión. Muchísimas gracias por responder y te esperamos la próxima! Será mucho mejor.");
            break;
    }
}
