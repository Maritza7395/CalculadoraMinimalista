
let temp;
let input = document.getElementById("inputNumbers");
let labelTemp = document.getElementById("valorTemp");
let sumar;
let restar;
let dividir;
let multiplicar;

$(document).ready(function(){
    $("input[name=operators]").click(function () {   
        console.log("seleccion: " + $(this).val()) ;
        select = $(this).val();
        $("label[name=labelOperator]").css("background-color", "#D5D6E9");
        $("div[name=operator]").css("color", "#111C81");
        $("#"+select).css("background-color", "#5563E6");
        $("#label"+select).css("color", "#FFFFFF");
        temp = input.value;
        labelTemp.innerText = temp;
        console.log(temp);
        input.value = "";
    });
});

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
    $("label[name=labelOperator]").css("background-color", "#D5D6E9");
    $("div[name=operator]").css("color", "#111C81");
}

function resultado() {
    if(select === "suma"){
        console.log("sumando");
        input.value = parseInt(temp) + parseInt(input.value);
    } else if(select === "resta"){
        console.log("restando");
        input.value = parseInt(temp) - parseInt(input.value);
    } else if(select === "multiplicacion"){
        console.log("multiplicando");
        input.value = parseInt(temp) * parseInt(input.value);
    } else if(select === "division"){
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