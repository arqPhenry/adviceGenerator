const boton = document.getElementById("button");
let textCampo = document.getElementById("quote");
let textIds = document.getElementById("title");

const cargarAdvice = async () => {

    try{
        const respuesta = await fetch("https://api.adviceslip.com/advice");
        console.log(respuesta);

        const datos = await respuesta.json();
        console.log(datos);

        let textAdvice = datos.slip.advice;
        let textId = datos.slip.id;

        textCampo.innerHTML = `"${textAdvice}"`;
        textIds.innerHTML = `Advice #${textId}`;
    }
    catch{
        console.log(error);
    }
    
}

