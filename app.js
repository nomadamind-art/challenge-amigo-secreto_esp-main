// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];

const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");



//Crea una función para agregar amigos al array "listaAmigos".
function agregarAmigo() {
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`; //Esta linea de código imprime los nombres agregados al array "listaAmigos" en la interfaz de usuario.
    
    //Verificar que el campo no este vacío y de ser así, mostrar una alerta que lo indique.
    if(inputAmigo.value == ""){
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    //Limpiar el campo de entrada.
    inputAmigo.value = "";
};

//Crea una función que sortea a un amigo aleatorio
function sortearAmigo(){
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); //Sortea un valor entre 0 y el array "listaAmigos" menos uno.
    const amigoSecreto = listaAmigos[indiceAleatorio];
    ulResultado.innerHTML = `<li>El nombre del amigo secreto es: ${amigoSecreto}</li>`;
}
//Función para actualizar la lista de amigos en la interfaz.
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");

    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; //Borra cualquier contenido previo dentro del contenedor de la lista.

    //Recorrer el array con un ciclo for.
    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos(i);
        listaAmigos.appendChild(li);
    }
}