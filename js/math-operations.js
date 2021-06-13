
let temp;
let input = document.getElementById("inputNumbers");
let labelTemp = document.getElementById("valorTemp");
let select;
let result = false;

$(document).ready(function(){
    $("input[name=operators]").click(function () {
        if(select !== undefined){
            removeClass();
        }
        if(input.value !== ""){
            temp = input.value;
        }
        labelTemp.innerText = temp;
        input.value = "0";
        select = $(this).val();
        $("#"+select).addClass("operators-button--select");
        $("#label"+select).css("color", "#FFFFFF");
    });
});

function pressNumber(number) {
    if(result){
        labelTemp.innerText = "";
        input.value = number;
        result = false;
    } else{
        if(input.value === "0"){
            input.value = "";
        }
        input.value += number; 
    }  
}

function clearInput() {
    input.value = 0;
    labelTemp.innerText = "";
    removeClass();
}

function resultado() {
    if(select === "suma"){
        input.value = parseFloat(temp) + parseFloat(input.value);
    } else if(select === "resta"){
        input.value = parseFloat(temp) - parseFloat(input.value);
    } else if(select === "multiplicacion"){
        input.value = parseFloat(temp) * parseFloat(input.value);
    } else if(select === "division"){
        input.value = parseFloat(temp) / parseFloat(input.value);
    }
    removeClass();
    result = true;
}

function removeClass() {
    $("#"+select).removeClass("operators-button--select");
    $("#label"+select).css("color", "#111C81");
}

function borrar() {
    if(input.value !== ""){
        input.value = input.value.slice(0, -1);
        if(input.value === ""){
            input.value = 0;
        }
    }
}

function changeSign() {
    let change = input.value.substring(0, 1);
    if(input.value !== "0"){
        if(change === "-"){
            input.value = input.value.replace("-", "");
        } else{
            input.value = "-" + input.value;
        }
    } 
}

function percentage() {
    
}