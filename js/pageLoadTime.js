// var beforLoad = new Date().getTime();
window.onload = loadTime;

function loadTime() {
//    let afterLoad = new Date().getTime();
//     let pageLoadTime = (window.performance.timing.domContentLoadedEventEnd - window.performance.timing.connectStart) / 1000
    let pageLoadTime = (PerformanceNavigationTiming.prototype.domContentLoadedEventEnd
        - PerformanceNavigationTiming.prototype.connectStart) / 1000;
    let footer = document.getElementsByClassName("footer").item(0)
    let pageLoadTimeTextLine = document.createElement("p")
    let pageLoadTimeText = document.createTextNode("Time load: " + pageLoadTime.toString() + " s.")
    pageLoadTimeTextLine.appendChild(pageLoadTimeText)
    footer.appendChild(pageLoadTimeTextLine)
}