function validateForm() {
    const name = document.getElementById('name')
    const lastName = document.getElementById('lastName')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')

    if (name.value == ''){
        alert('Field name is empty')
        name.focus
    }

    if (lastName.value == ''){
        alert('Field last name is empty')
        lastName.focus
    }

    if (email.value == ''){
        alert('Field email is empty')
        email.focus
    }

    if (pass.value == ''){
        alert('Field password is empty')
        pass.focus
    }
}