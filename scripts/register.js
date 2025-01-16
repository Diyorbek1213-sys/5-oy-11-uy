const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const register = document.getElementById('register')
const form = document.getElementById('form')

function validate(username, email, password, confirmPassword) {
    if (username.value.length < 3) {
        username.focus()
        username.style.outlineColor = 'red'
        alert('username 3 tadan kam bo`lmasin')
        return false
    }

    if (email.value.length < 10) {
        email.focus()
        email.style.outlineColor = 'red'
        alert('emailni to`g`ri kiriting')
        return false
    }

    if (password.value.length < 3) {
        password.focus()
        password.style.outlineColor = 'red'
        alert('parol 3 tadan kam bo`lmasin')
        return false
    }

    if (confirmPassword.value !== password.value) {
        confirmPassword.focus()
        confirmPassword.style.outlineColor = 'red'
        alert('parol mos emas')
        return false
    } 

    return true
}

form && form.addEventListener('submit', function(event) {
    event.preventDefault()

    const isValid = validate(username, email, password, confirmPassword)

    if (!isValid) {
        return;
    }

    const user = {
        username: username.value,
        email: email.value,
        password: password.value
    }

    fetch('https://auth-rg69.onrender.com/api/auth/signup', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },

        body: JSON.stringify(user)
    })

    .then(response => {
        if (response.status == 400) {
            alert('Email yoki parol xato')
        }

        if (response.status == 200) {
            return response.json()
        }
    })

    .then(data => {
        if (data.message == 'User registered successfully!') {
            location.assign(`${window.location.origin}/pages/login.html`)
        }
    })

    .catch(error => {
        console.log(error)
    })
})