var correctAnswers = {
    1: "RES2", 
    2: "RES7",
    3: "RES11", 
    4: "RES15", 
    5: "RES18", 
    6: "RES24",
    7: "RES27",
    8: "RES31",
    9: "RES35",
    10: "RES39"
};
var userAnswers = {};

function Corregir(){
    var numCorrect = 0;
    var allQuestionsAnswered = true;

    for (var questionNumber in correctAnswers){
        var selectedAnswer = document.querySelector('input[name="pre' + questionNumber + '"]:checked');
         if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswers[questionNumber]){
                numCorrect++;
            }
            }else{
                allQuestionsAnswered = false;
            }
       }
    if (!allQuestionsAnswered){
        alert('Por favor responde todas las preguntas antes de corregir.');
    
    } else {
    alert ('Has acertado ' + numCorrect + ' preguntas. ');

    if (numCorrect <= 2) {
        alert ('Tienes que estudiar más.');
    }
}
}

function Restablecer() {
    //Deseleccionar las respuestas 
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;
    });
    userAnswers = {}; //limpiar las respuestas registradas 
}

//Modo oscuro
document.addEventListener("DOMContentLoaded", function() {
    var modeCheckbox = document.getElementById("mode");

    modeCheckbox.addEventListener("change", function() {
if (modeCheckbox.checked) {

    //Activar modo oscuro
document.body.classList.add("dark-mode"); 
} else {

    //Desactivar modo oscuro
    document.body.classList.remove("dark-mode");
} 
    });
});

//Funcion del boton 
 function enviar() {
    // Verificar si los campos obligatorios estan completos
    var nombre = document.getElementById("Name").value;
    
    var apellidos = document.getElementById("Ape").value;

    var email = document.getElementById("Email").value;

    var mensaje = document.getElementById("messaje").value;
 
    //Verificar si los campos estan llenos
    if (nombre !== "" && apellidos !== "" && email !== "" && mensaje !== "") {
        alert("Datos enviados correctamente");
    } else {
        alert("Por favor, complete todos los campos obligatorios");
    }
}