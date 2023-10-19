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

function abc(){
    var text = document.getElementById("text-input").value;

    var newtext = text.toUpperCase();

    document.getElementById("text-results").innerHTML = newtext;
}

