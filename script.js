var buttonEncriptar = document.querySelector(".btn-encriptar");
var buttonDecencriptar = document.querySelector(".btn-decencriptar");
var muneco = document.querySelector(".contenidomuneco");
var contenido = document.querySelector(".contenido-parrafo");
var resultado = document.querySelector(".text-resultado");


function encriptar(){
    ocultarAdelante();
    var cajatextual = recuperarText();
    buttonEncriptar.addEventListener("click", encriptar = () => {});
    resultado.textContent = encriptarText(cajatextual);
}
function decencriptar(){
    ocultarAdelante();
    var cajatextual = recuperarText();
    buttonDecencriptar.addEventListener("click", decencriptar = () => {});
    resultado.textContent = decencriptarText(cajatextual);
}
function recuperarText(){
    var cajatextual = document.querySelector(".cajatextual");
    return cajatextual.value
}

function ocultarAdelante(){
   muneco.classList.add("ocultar");
   contenido.classList.add("ocultar");
}
function encriptarText(mensaje){
    var text = mensaje;
    var textFinal = "";
    
    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            textFinal= textFinal + "ai"
        }
        else if (text[i] == "e"){
            textFinal = textFinal + "enter"

        }
        else if (texto[i] == "i"){
            textFinal = textFinal + "imes"

        }
        else if (texto[i] == "o"){
            textFinal = textFinal + "ober"
        }
        else if (texto[i] == "u"){
            textFinal = textFinal + "ufat"
        }
        else{
            textFinal = textFinal + text[i];
        }
    }
    return textFinal;
}
function decencriptarText(mensaje){
    var text = mensaje;
    var textFinal = "";
    
    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            textFinal= textFinal + "a"
            i = i + 1;
        }
        else if (text[i] == "e"){
            textFinal = textFinal + "e"
            i = i + 4;

        }
        else if (text[i] == "i"){
            textFinal = textFinal + "i"
            i = i + 3;

        }
        else if (text[i] == "o"){
            textFinal = textFinal + "o"
            i = i + 3;
        }
        else if (text[i] == "u"){
            textFinal = textFinal + "u"
            i = i + 3;
        }
        else{
            textFinal = textFinal + text[i];
        }
    }
    return textFinal;
}

const btncopiar = document.querySelector(".btn-copiar");
    btncopiar = addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".text-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
});
