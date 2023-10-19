function charactersCounter(){
    var text = document.getElementById("text-input").value;

    var numberCaracter = text.length;

    document.getElementById("numeric-results").innerHTML = "Number of Characters = " + numberCaracter;
}

function upper(){
    var text = document.getElementById("text-input").value;

    var newtext = text.toUpperCase();

    document.getElementById("text-results").innerHTML = newtext;
}


function lower(){
    var text = document.getElementById("text-input").value;

    var newtext = text.toLowerCase();

    document.getElementById("text-results").innerHTML = newtext;
}


function reverserString(){
    var text = document.getElementById("text-input").value;

    var newtext = text.split('').reverse().join('');

    document.getElementById("text-results").innerHTML = newtext;
}


function capitalize(){

    var text = document.getElementById("text-input").value;

    
    if (text.length === 0) {
        document.getElementById("text-results").innerHTML = text;
    }

    var newtext = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();


    document.getElementById("text-results").innerHTML = newtext;
    
}