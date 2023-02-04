var header
var headerLink
var headerCategory

window.onload = () => {
    header = document.getElementById('header')
    headerLink = document.getElementById('header-link')
    headerCategory = document.getElementById('header-category')

    window.addEventListener("scroll", function () {
        if (window.scrollY > 80) {
            header.style.backgroundImage = "none"
            header.style.backgroundColor = "aliceblue"
            header.classList.remove("text-dark")

            // headerLink.classList.remove("link-text-dark")

            // for (let i = 0; i < headerCategory.children.length; i++) {
            //     headerCategory.children[i].classList.remove("text-dark")
            // }
        } else {
            header.style.backgroundImage = "linear-gradient(to bottom, white, transparent)";
            header.style.backgroundColor = "transparent"
            header.classList.add("text-dark")

            // headerLink.classList.add("link-text-dark")

            // for (let i = 0; i < headerCategory.children.length; i++) {
            //     headerCategory.children[i].classList.add("text-dark")
            // }
        }
    });
}