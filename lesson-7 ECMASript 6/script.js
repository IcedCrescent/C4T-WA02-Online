fetch('url')
.then(response => {
    if (response.ok) {
        return response.json()
    }
})
.then(data => {
    console.log(data)
})