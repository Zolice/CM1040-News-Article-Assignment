// Set the countdown timer to `timer - 1` seconds
var timer = 11

window.onload = () => {
    generalOnload()
    addHeader(true)
    addSidebar()

    countdown()
}

// Reduce the timer by 1 every second
function countdown() {
    timer--

    // When the countdown is over, send the user back to the home page
    if (timer == 0) {
        window.location.href = "index.html"
    }
    document.getElementById("countdown").innerHTML = `You will be redirected to our home page in ${timer} seconds.`
    setTimeout(countdown, 1000)
}