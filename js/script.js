//console.log recibe a los usuarios
function saludar (nombre){
    console.log ("Bienvenido "+nombre+"!")
}
let nombreUsuario = prompt("Escribe tu nombre y tu apellido")
saludar (nombreUsuario)
//Preguntas al usuario para saber sus gustos
let ligafavorita = prompt ("Hola! ¿Cual es tu liga favorita de futbol profesional?")
let hincha = prompt ("Y de que club sos hincha?")
const nacionalidad = ("argentino")
console.log ("Perfecto! Estamos con un "+nacionalidad+" fan de la "+ligafavorita+", e hincha de "+hincha+".")
console.log ("Te haremos algunas preguntas sobre futbol, tus gustos, y algunas cosas mas.")
//Test switch
let postpartido = prompt("¿Que te gusta hacer luego de un partido? (Descansar y darme una buena ducha para relajar los musculos), (Salir a comer algo), (Ir a entrenar) ");
switch (postpartido) {
    case "Descansar y darme una buena ducha para relajar los musculos":
        alert("Esto esta muy bien, el cuerpo luego de una gran exigencia necesita frenar y recuperar energias.");
        break;
    
    case "Salir a comer algo":
        alert("Es una muy buena idea! Hacer esto ayuda a liberar la mente y relajarnos psicologicamente luego de tanta concentracion dedicada al partido.");
        break;
    case "Ir a entrenar":
        alert("Esta opcion no esta bien, un desgaste fisico tan alto requiere de un descanso posterior. Ya que sino pueden empezar a aparecer las lesiones.");
        break;
    default:
        alert("Puede que tu respuesta no este entre las opciones, eran solamente algunos ejemplos de lo que suelen hacer los jugadores luego de los partidos!")
        break;
}
//Test if, else y else if
let juego = prompt ("Jugas al futbol? En caso de que si, de que forma? (En un club) o (Recreativamente)")
if (juego == "En un club"){
    console.log ("Que alegria! Es un paso muy grande estar en un club para poder progresar profesionalmente en el futbol. Te desesamos el mayor de los exitos y a entrenar con todas las ganas, que es lo unico que no puede faltar.")
}else if (juego == "Recreativamente"){
    console.log ("Esta muy bien! El futbol recreativo es hermoso, solamente que si queremos progresar profesionalmente, debemos alejarnos de el y acercarnos a los clubes; ya que con ellos va a ser mas facil crecer en caunto a nuestra carrera!")
}
//Array 
const mejoresJugadores = ["Lionel Messi"," Cristiano Ronaldo"," Pele"," Diego Maradona"," Johan Cruyff"," Zinedine Zidane"];
let jugadorElegido = prompt("¿Cual es el mejor jugador de futbol de la historia? "+mejoresJugadores)
console.log ("Claro! "+jugadorElegido+" es uno de los mas talentosos! Buena eleccion.")
let LPF = prompt("¿Cual es el mejor equipo de la liga de futbol profesional argentino? (Boca) (River) (Independiente) (Racing) (San Lorenzo)")
switch (LPF) {
    case "Boca":
    case "River":
    case "Independiente": 
    case "Racing":
    case "San Lorenzo":
        console.log ("Gracias por responder las preguntas, para la proxima haremos un interrogatorio mucho mas entretenido y extenso. Saludos!")
        break;
    default:
        alert("Tu respuesta no esta entre las opciones! Pero no hay ningun problema, no hay una respuesta correcta; cada uno tiene su opinion. Muchisimas gracias por responder y te esperamos la proxima! Sera mucho mejor.")
        break;
}