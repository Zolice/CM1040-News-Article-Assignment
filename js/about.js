window.onload = () => {
    generalOnload()
    addHeader(true)
    addSidebar()
}

function submitForm() {
    let message = ""
    let submission = {}
    if (formChecker("email")) {
        message += "Your email is invalid.\n"
    }
    if (formChecker("message")) {
        message += "Please leave a message.\n"
    }
    if (message == "") {
        message = "Thank you for your submission!"
        submission.fname = document.getElementById("fname").value
        submission.lname = document.getElementById("lname").value
        submission.email = document.getElementById("email").value
        submission.message = document.getElementById("message").value
        console.log(submission)
        // The variable submission can be passed on to the server, using POST API method.
        // However, as there is no backend for this project, this is skipped.

        document.getElementById("fname").value = ""
        document.getElementById("lname").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""
    }
    alert(message)
}

function formChecker(type) {
    switch (type) {
        case "email":
            let test = document.getElementById("email").value.split('@')
            if (test.length != 2) {
                setFormInvalid(type)
                return false
            }
            if (test[1] == "") {
                setFormInvalid(type)
                return false
            }
            test = test[1].split('.')
            if (test.length != 2) {
                setFormInvalid(type)
                return false
            }
            if (test[1] == "") {
                setFormInvalid(type)
                return false
            }
            setFormValid(type)
            break
        case "message":
            if (document.getElementById("message").value == "") {
                setFormInvalid(type)
                return false
            }
            setFormValid(type)
            break
    }
}

function setFormInvalid(type) {
    document.getElementById(type).style.borderColor = "red"
}

function setFormValid(type) {
    document.getElementById(type).style.borderColor = ""
}