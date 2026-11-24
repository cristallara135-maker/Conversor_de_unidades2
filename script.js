function calcular() {

    var cm = parseFloat(document.getElementById("cantidad").value);
    var unidad = document.getElementById("unidad").value;
    var resultado;

    if (isNaN(cm)) {
        alert("Ingresa una cantidad");
        return;
    }

    if (unidad == "mm") {
        resultado = cm * 10;
    }
    else if (unidad == "m") {
        resultado = cm / 100;
    }
    else if (unidad == "km") {
        resultado = cm / 100000;
    }
    else if (unidad == "p") {
        resultado = cm / 2.54;
    }

    document.getElementById("resultado").innerHTML =
    "Resultado: " + resultado;

}