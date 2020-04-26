var bar = new ProgressBar.Circle('#loading', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: 'black',
    svgStyle: null
  });
  export function startLoad(percentDone) {
  bar.animate(percentDone*38);  // Number from 0.0 to 1.0
}

export function loadingdone(coronascore)  {
    bar.animate(1);
    var path = document.querySelector('#loading > svg > path:last-child');
    if (darkmode.isActivated() == true)
        if (coronascore < 100)  {
            path.setAttribute("stroke", "#b344e8");
        }
        else if (coronascore < 500) {
            path.setAttribute("stroke", "#0087ff");
        }
        else {
            path.setAttribute("stroke", "#19ffff");
        }
    else {
        if (coronascore < 100)  {
            path.setAttribute("stroke", "#4CBB17");
        }
        else if (coronascore < 500) {
            path.setAttribute("stroke", "#FF7800");
        }
        else {
            path.setAttribute("stroke", "#E60000");
        }
    }
}