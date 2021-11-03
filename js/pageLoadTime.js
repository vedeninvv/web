var beforLoad = new Date().getTime();
window.onload = loadTime;

function loadTime () {
    let afterLoad = new Date().getTime();
    let pageLoadTime = (afterLoad - beforLoad) / 1000
    let footer = document.getElementsByClassName("footer").item(0)
    let pageLoadTimeTextLine = document.createElement("p")
    let pageLoadTimeText = document.createTextNode("Time load: " + pageLoadTime.toString() + " s.")
    pageLoadTimeTextLine.appendChild(pageLoadTimeText)
    footer.appendChild(pageLoadTimeTextLine)
}