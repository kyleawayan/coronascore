import { CountUp } from './node_modules/countup.js/dist/countUp.min.js';
let center = document.querySelector('.center');
let score = document.querySelector('.score');

const options = {
      separator: '',
    };

function startcount() {
    let center = document.querySelector('.center');
    let score = document.querySelector('.score');
    center.classList.add('animation');
    score.classList.remove('hidden');
    score.classList.add('visible');
    var countUp = new CountUp('score', Math.floor(Math.random() * 1000), options)
    setTimeout(function() {
        countUp.start();
    }, 500);
}