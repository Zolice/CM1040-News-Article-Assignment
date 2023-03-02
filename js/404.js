var timer = 11

window.onload = () => {
    generalOnload()
    addHeader(true)
    addSidebar()
    
    countdown()
}

function countdown() {
    timer--
    if (timer == 0) {
        window.location.href = "index.html"
    }
    document.getElementById("countdown").innerHTML = `You will be redirected to our home page in ${timer} seconds.`
    setTimeout(countdown, 1000)
}