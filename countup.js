import { CountUp } from './node_modules/countup.js/dist/countUp.min.js';

window.onload = function() {
    var countUp = new CountUp('score', 2000);
    countUp.start();
}