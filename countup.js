import { CountUp } from './node_modules/countup.js/dist/countUp.min.js';
let center = document.querySelector('.center');
let score = document.querySelector('.score');
let score2 = document.querySelector('.score2');
let score3 = document.querySelector('.score3');
let score4 = document.querySelector('.score4');
let score5 = document.querySelector('.score5');

const options = {
      separator: '',
    };

export function startcount(SCORE) {
    fix()
    let center = document.querySelector('.center');
    let score = document.querySelector('.score');
    center.classList.add('animation');
    score.classList.remove('hidden');
    score.classList.add('visible');
    var countUp = new CountUp('score', SCORE, options)
    setTimeout(function() {
        countUp.start();
    }, 500);
}

export function info(cvData, C, D) {
    let center = document.querySelector('.center');
    let score = document.querySelector('.score');
    setTimeout(function() {
        score2.classList.remove('hidden');
        score2.classList.add('visible');
        score3.classList.remove('hidden');
        score3.classList.add('visible');
    }, 1000);
    var countUp = new CountUp('info', C, options)
    setTimeout(function() {
        countUp.start();
    }, 1000);
}

export function deaths(cvData, C, D) {
    let center = document.querySelector('.center');
    let score = document.querySelector('.score');
    setTimeout(function() {
        score4.classList.remove('hidden');
        score4.classList.add('visible');
        score5.classList.remove('hidden');
        score5.classList.add('visible');
    }, 1000);
    var countUp = new CountUp('deaths', D, options)
    setTimeout(function() {
        countUp.start();
    }, 1000);
}