(function() {
    let page = document.location.toString()

    let menu = document.getElementsByClassName("menu")[0]
    let menuOptions = menu.getElementsByTagName("a")
    alert(page)
    for (let i = 0; i < menuOptions.length; i++) {
        if (menuOptions[i].href === page){
            menuOptions[i].classList.add("menu__item_active");
        }
    }
})()