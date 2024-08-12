window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const words = document.querySelector('.words');
let p = document.createElement('p');

recognition.interimResults = true;
words.appendChild(p);
recognition.addEventListener('results', event => console.log(event));