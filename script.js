//Variables
const botonInicio = document.getElementById("boton-inicio");
const botonSiguiente = document.getElementById("boton-siguiente");
const contenedorOpciones = document.getElementById("opcionesx");
const preguntaContenedorIMG = document.getElementById("pregunta_contenedor");
const respuesta1 = document.getElementById("respuesta-1");
const respuesta2 = document.getElementById("respuesta-2");
const respuesta3 = document.getElementById("respuesta-3");
const respuesta4 = document.getElementById("respuesta-4");
const imgPerro = document.getElementById('img-perro');

//Listeners

botonInicio.addEventListener("click", empezarJuego);

//Esto va a permitir que al darle start el juego empieze
function empezarJuego() {
  console.log("empezamos");
  botonInicio.classList.add("hide");

  contenedorOpciones.classList.remove("hide");
  botonSiguiente.classList.remove("hide");
  preguntaContenedorIMG.classList.remove("hide");
  proximaPregunta();
}
//Esto va a permitir que al darle siguiente pases al otro item
function proximaPregunta() {
    imgPerro.src = "https://github.com/franpossa1/QuizAppJS/blob/main/rocky.jpeg?raw=true"

}
//esto permite elegir entre las diferentes respuestas
function seleccionarRespuesta() {}

const preguntas = [
    {
        preguntaURL: "/cocker",
        respuesta : [
            {texto: "Cocker", correcto: true },
            {texto: "Bulldog", correcto: false },
            {texto: "Maltes", correcto: false },
            {texto: "Boxer", correcto: false },
        ]
    }
]