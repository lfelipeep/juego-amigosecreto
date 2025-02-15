// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    amigos.push(nombre);  

    let lista = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    input.value = "";  
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para sortear.");
        return;
    }

    let copiaAmigos = [...amigos];  
    let resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let opciones = copiaAmigos.filter(amigo => amigo !== amigos[i]); 

        if (opciones.length === 0) {
            alert("No se puede hacer el sorteo correctamente. Intenta con más amigos.");
            return;
        }

        let elegido = opciones[Math.floor(Math.random() * opciones.length)];
        resultado.push(`${amigos[i]} → ${elegido}`);

        copiaAmigos.splice(copiaAmigos.indexOf(elegido), 1); 
    }

    
    let tituloResultado = document.getElementById("tituloResultado");
    tituloResultado.style.display = "block";  

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; 

    resultado.forEach(pareja => {
        let item = document.createElement("li");
        item.textContent = pareja;
        item.classList.add("sorteo-item"); 
        resultadoLista.appendChild(item);
    });
}

