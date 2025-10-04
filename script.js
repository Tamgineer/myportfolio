/* Indecisive
var intervalId = window.setInterval(function(){
    const textElement = document.getElementById('textToChange');
    textIndex++;
    textIndex %= options.length;
    textElement.innerHTML = options[textIndex];
}, 2500);
*/

const options = ["Software engineer", "Graphics programmer", "3D modeller", "Artist", "Game developer", "Cat enthusiast"];
let textIndex = 0;

function ChangeTextOnHover(event){
    const textElement = document.getElementById('textToChange');
    textIndex++;
    textIndex %= options.length;
    textElement.innerHTML = options[textIndex];
}

