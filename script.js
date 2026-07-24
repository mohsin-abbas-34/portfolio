const words = [
    ".NET Developer",
    "Angular Developer",
    "Full Stack Developer",
    "Software Engineer"
];

let wordIndex = 0;

const typing = document.querySelector(".typing");

function changeWord(){

    typing.textContent = words[wordIndex];

    wordIndex++;

    if(wordIndex === words.length){

        wordIndex = 0;

    }

}

changeWord();

setInterval(changeWord,2000);