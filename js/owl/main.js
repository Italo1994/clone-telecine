function trocarCorIcone(elemento) {

    if(elemento) {
        document.getElementById("icone-franquia").style.color = "red";
    }

    if(elemento) {
        document.getElementById("icone-cinelists").style.color = "red";
    }

    document.getElementById("icone-genero").style.color = "red";

    document.getElementById("icone-natv").style.color = "red";
}

function voltarCorIcone(elemento) {
    document.getElementById("icone-franquia").style.color = "#fff";

    document.getElementById("icone-cinelists").style.color = "#fff";

    document.getElementById("icone-genero").style.color = "#fff";

    document.getElementById("icone-natv").style.color = "#fff";
}