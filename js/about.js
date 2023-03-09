window.onload = () => {
    generalOnload()
    addHeader(true)
    addSidebar()
}

// Submit Form
function submitForm() {
    let message = ""
    let submission = {}

    // Check the form for validity
    if (formChecker("email")) {
        message += "Your email is invalid.\n"
    }
    if (formChecker("message")) {
        message += "Please leave a message.\n"
    }
    // Confirm validity results
    if (message == "") {
        message = "Thank you for your submission!"
        submission.fname = document.getElementById("fname").value
        submission.lname = document.getElementById("lname").value
        submission.email = document.getElementById("email").value
        submission.message = document.getElementById("message").value
        // The variable submission can be passed on to the server, using POST API method.
        // However, as there is no backend for this project, this is skipped.

        // Reset the form to empty
        document.getElementById("fname").value = ""
        document.getElementById("lname").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""
    }
    // Display the message
    alert(message)
}

// Check the form for validity
function formChecker(type) {
    switch (type) {
        case "email":
            // Check the email for "@". eg: "abc@"
            let test = document.getElementById("email").value.split('@')
            if (test.length != 2) { // Email doesn't contain "@"
                setFormInvalid(type)
                return false
            }
            if (test[1] == "") { // Email doesn't contain anything after "@"
                setFormInvalid(type)
                return false
            }
            // Check the email for "." after @. eg: "abc@abc."
            test = test[1].split('.')
            if (test.length != 2) { // Email doesn't contain "."
                setFormInvalid(type)
                return false
            }
            if (test[1] == "") { // Email doesn't contain anything after "."
                setFormInvalid(type)
                return false
            }
            // Email is valid, contains all basic requirements of an email
            setFormValid(type)
            break
        case "message":
            if (document.getElementById("message").value == "") { // Message is empty
                setFormInvalid(type)
                return false
            }
            setFormValid(type)
            break
    }
}

// Make the field red if the form is invalid
function setFormInvalid(type) {
    document.getElementById(type).style.borderColor = "red"
}

// Reset border to neutral if the form is valid
function setFormValid(type) {
    document.getElementById(type).style.borderColor = ""
}