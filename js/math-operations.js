
let temp;
let input = document.getElementById("inputNumbers");
let labelTemp = document.getElementById("valorTemp");
let sumar;
let restar;
let dividir;
let multiplicar;

function pressNumber(number) {
    if(input.value === "0"){
        console.log("if");
        input.value = "";
    }
    input.value += number;   
}

function clearInput() {
    input.value = 0;
    labelTemp.innerText = "";
}

function suma() {
    sumar = true;
    restar = false;
    multiplicar = false;
    dividir = false;
    temp = input.value;
    labelTemp.innerText = temp;
    input.value = "";
}

function resta() {
    sumar = false;
    restar = true;
    multiplicar = false;
    dividir = false;
    temp = input.value;
    labelTemp.innerText = temp;
    input.value = "";
}

function multiplicacion() {
    sumar = false;
    restar = false;
    multiplicar = true;
    dividir = false;
    temp = input.value;
    labelTemp.innerText = temp;
    input.value = "";
}

function division() {
    sumar = false;
    restar = false;
    multiplicar = false;
    dividir = true;
    temp = input.value;
    labelTemp.innerText = temp;
    input.value = "";
}

function resultado() {
    if(sumar){
        console.log("sumando");
        input.value = parseInt(temp) + parseInt(input.value);
    } else if(restar){
        console.log("restando");
        input.value = parseInt(temp) - parseInt(input.value);
    } else if(multiplicar){
        console.log("multiplicando");
        input.value = parseInt(temp) * parseInt(input.value);
    } else if(dividir){
        console.log("dividiendo");
        input.value = parseInt(temp) / parseInt(input.value);
    }
}

function borrar() {
    if(input.value !== ""){
        input.value = input.value.slice(0, -1);
        if(input.value === ""){
            input.value = 0;
        }
    }
}