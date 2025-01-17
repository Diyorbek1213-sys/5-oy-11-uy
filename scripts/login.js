const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')

function validate(username, email, password) {
    if (username.value.length < 3) {
        username.focus()
        username.style.outlineColor = 'red'
        alert('usernameni to`g`ri kiriting')
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
        alert('parolni to`g`ri kiriting')
        return false
    }

    return true
}

form && form.addEventListener('submit', function(event) {
    event.preventDefault()

    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
    }

    fetch('https://auth-rg69.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },

        body: JSON.stringify(user)
    })
    
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        if (response.status == 200) {
            return response.json()
        }
    })
    
    .then(data => {
        if (data) {
            console.log(data)
            location.assign(`${window.location.origin}/index.html`);
        } else {
            alert('registratsiyadan o`ting')
            location.assign(`${window.location.origin}/pages/register.html`);
        }
    })

    .catch(error => {
        console.log(error)
    })
})