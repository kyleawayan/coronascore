import { CountUp } from './node_modules/countup.js/dist/countUp.min.js';

document.getElementById("submit").addEventListener("click", startcount)

const options = {
      separator: '',
    };

function startcount() {
    var countUp = new CountUp('score', 82, options)
    setTimeout(function() {
        countUp.start();
    }, 500);
}