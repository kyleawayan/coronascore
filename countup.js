import { CountUp } from './node_modules/countup.js/dist/countUp.min.js';

document.getElementById("submit").addEventListener("click", startcount)

const options = {
      separator: '',
    };

function startcount() {
    var countUp = new CountUp('score', Math.floor(Math.random() * 1000), options)
    setTimeout(function() {
        countUp.start();
    }, 500);
}