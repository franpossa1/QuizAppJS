//Variables
const botonInicio = document.getElementById("boton-inicio");
const botonSiguiente = document.getElementById("boton-siguiente");
const contenedorOpciones = document.getElementById("opcionesx");
const preguntaContenedorIMG = document.getElementById("pregunta_contenedor");

const imgPerro = document.getElementById("img-perro");
let preguntasMezcladas, indexPreguntaActual;

//Listeners

botonInicio.addEventListener("click", empezarJuego);
botonSiguiente.addEventListener("click",()=>{
    indexPreguntaActual++;
    proximaPregunta();  
})

//Esto va a permitir que al darle start el juego empieze
function empezarJuego() {
  
  botonInicio.classList.add("hide");

  contenedorOpciones.classList.remove("hide");
  botonSiguiente.classList.remove("hide");
  preguntaContenedorIMG.classList.remove("hide");

  preguntasMezcladas = preguntas.sort(() => Math.random() - 0.5);
  indexPreguntaActual = 0;
  proximaPregunta();
}

//Esto va a permitir que al darle siguiente pases al otro item
function proximaPregunta() {
    resetearEstado();
  mostrarPregunta(preguntasMezcladas[indexPreguntaActual]);
}


//Aca permite que escoja de manera aleatoria la pregunta y la muestra
function mostrarPregunta(preg) {
  //asignamos la url de la imagen correspondiente a esa pregunta
  imgPerro.src = preg.preguntaURL;
  //asignamos cada una de los valores de la respuesta
  preg.respuesta.forEach((resp) => {
    const botonRespuesta = document.createElement("button");
    botonRespuesta.innerText = resp.texto;
    botonRespuesta.classList.add("btn");
    if (resp.correcto) {
        console.log(preg.correcto)
      botonRespuesta.dataset.correcta = preg.correcto;
    }
    botonRespuesta.addEventListener("click", seleccionarRespuesta);
    contenedorOpciones.appendChild(botonRespuesta);
  });
}



//Esto permite limpiar cualquier pregunta anterior y 
//asi se muestren las opciones correctamente
function resetearEstado (){
    botonSiguiente.classList.add("hide");
    while(contenedorOpciones.firstChild){
        contenedorOpciones.removeChild(contenedorOpciones.firstChild);
    }
    
}




//Interaccion con respuesta correctas e incorrectas
function seleccionarRespuesta(evento) {
    const respuestaSeleccionada = evento.target;
    const estadoCorrecto = respuestaSeleccionada.dataset.correcta;
setStatusClass (document.body,estadoCorrecto);
    Array.from(contenedorOpciones.children).forEach(btn =>{
        setStatusClass(btn, btn.dataset.correcta)
    });
    if(preguntasMezcladas.length > indexPreguntaActual + 1){
        botonSiguiente.classList.remove("hide");
    } else {
        botonInicio.innerText = "De Nuevo";
        botonInicio.classList.remove("hide"); 
    }
    
    
}


function setStatusClass (elemento, correct){
    limpiezaDeStado(elemento);
    if(correct){
        elemento.classList.add("correcta"); 
    } else {elemento.classList.add("incorrecta")}

}
function limpiezaDeStado (elemento){
    elemento.classList.remove("correcta");
    elemento.classList.remove("incorrecta");
}

const preguntas = [
  {
    preguntaURL:
      "https://cdn.pixabay.com/photo/2014/02/28/22/45/french-bulldog-277255_960_720.jpg",
    respuesta: [
      { texto: "Cocker", correcto: false },
      { texto: "Bulldog", correcto: true },
      { texto: "Maltes", correcto: false },
      { texto: "Boxer", correcto: false },
    ]
  },
//2
  {
    preguntaURL:
      "https://cdn.pixabay.com/photo/2019/12/24/13/20/dogs-4716741_960_720.jpg",
    respuesta: 
    [
      { texto: "Cocker", correcto: true },
      { texto: "Boxer", correcto: false },
      { texto: "Bulldog", correcto: false },
      { texto: "Maltes", correcto: false },
    ],
  },
//3
{
    preguntaURL:
      "https://cdn.pixabay.com/photo/2016/03/24/22/53/boxer-1277804_960_720.jpg",
    respuesta: 
    [
      { texto: "Cocker", correcto: false },
      { texto: "Boxer", correcto: true },
      { texto: "Bulldog", correcto: false },
      { texto: "Maltes", correcto: false },
    ],
  },
//4
{
    preguntaURL:
      "https://cdn.pixabay.com/photo/2018/08/27/14/29/bernese-mountain-dog-3635106_960_720.jpg",
    respuesta: 
    [
      { texto: "Pastor Suizo", correcto: false },
      { texto: "Golden Retriever", correcto: false },
      { texto: "Labrador", correcto: false },
      { texto: "Boyero", correcto: true },
    ],
  },
//5
{
    preguntaURL:
      "https://cdn.pixabay.com/photo/2019/06/23/16/06/chow-chow-4294092_960_720.jpg",
    respuesta: 
    [
      { texto: "Pastor Suizo", correcto: false },
      { texto: "Golden Retriever", correcto: false },
      { texto: "Shih Tzu", correcto: false },
      { texto: "Chow Chow", correcto: true },
    ],
  },
  //6
  {
    preguntaURL:
      "https://cdn.pixabay.com/photo/2016/07/28/15/08/dog-1548176_960_720.jpg",
    respuesta: 
    [
      { texto: "Pastor Suizo", correcto: false },
      { texto: "Golden Retriever", correcto: false },
      { texto: "Border Collie", correcto: true },
      { texto: "Boyero", correcto: false },
    ],
  },

  //7
  {
    preguntaURL:
      " https://cdn.pixabay.com/photo/2020/05/28/18/36/schnauzer-5232202_960_720.jpg",
    respuesta: 
    [
      { texto: "Pastor Suizo", correcto: false },
      { texto: "Schnauzer", correcto: true },
      { texto: "Shih Tzu", correcto: false },
      { texto: "Boyero", correcto: false },
    ],
  },
  //8
  {
    preguntaURL:
      "https://cdn.pixabay.com/photo/2015/02/01/19/27/golden-retriever-620159_960_720.jpg",
    respuesta: 
    [
      { texto: "Pastor Suizo", correcto: false },
      { texto: "Golden Retriever", correcto: true },
      { texto: "Labrador", correcto: false },
      { texto: "Boyero", correcto: false },
    ],
  },
  //9
  {
    preguntaURL:
      "https://cdn.pixabay.com/photo/2013/11/28/12/04/dog-220394_960_720.jpg",
    respuesta: 
    [
      { texto: "Pastor Suizo", correcto: false },
      { texto: "Golden Retriever", correcto: false },
      { texto: "Shih Tzu", correcto: true },
      { texto: "Boyero", correcto: false },
    ],
  },
  //10
  {
    preguntaURL:
      "https://cdn.pixabay.com/photo/2020/01/19/13/41/dog-4777870_960_720.jpg",
    respuesta: 
    [
      { texto: "Yorkshire Terrier", correcto: true },
      { texto: "Bulldog Ingles", correcto: false },
      { texto: "Deutsche Dogge", correcto: false },
      { texto: "Boyero", correcto: false },
    ],
  },
  //




 


];
