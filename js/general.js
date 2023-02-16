var header
var darkHeader
var lightHeader

var sidebar

window.onload = () => {
    addHeader()
    addSidebar()
}

function setHeaderStyle() {
    if (window.scrollY > 432) {
        header.classList.add("header-light")
        darkHeader.style.display = "none"
        lightHeader.style.display = "flex"
    }
    else {
        header.classList.remove("header-light")
        darkHeader.style.display = "flex"
        lightHeader.style.display = "none"
    }
}

function addHeader() {
    header = document.getElementById('header-div')

    $('#header-div').load('./assets/elements/header.html', function () {
        darkHeader = document.getElementById('header-dark')
        lightHeader = document.getElementById('header-light')

        setHeaderStyle()
        window.addEventListener("scroll", setHeaderStyle)
    });
}

function addSidebar() {
    $('#sidebar').load('./assets/elements/social-media-feed.html');
}