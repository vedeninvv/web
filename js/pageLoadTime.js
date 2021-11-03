!function () {
    let time = window.performance.timing;
    let pageLoadTime = time.domContentLoadedEventEnd - time.navigationStart;
    let footer = document.getElementsByClassName("footer").item(0)
    let pageLoadTimeTextLine = document.createElement("p")
    let pageLoadTimeText = document.createTextNode("Time load: " + pageLoadTime.toString())
    pageLoadTimeTextLine.appendChild(pageLoadTimeText)
    footer.appendChild(pageLoadTimeTextLine)
}()