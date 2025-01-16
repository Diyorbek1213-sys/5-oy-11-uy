fetch('https://auth-rg69.onrender.com/api/products/all') 
.then(response => {
    if (response.status === 200) {
        return response.json()
    }
})

.then(data => {
    console.log(data)
})

.catch(error => {
    console.log(error)
})