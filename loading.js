export function startLoad(percentDone) {
var bar = new ProgressBar.Circle('#loading', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: 'black',
    svgStyle: null
  });
  
  bar.animate(percentDone);  // Number from 0.0 to 1.0
}