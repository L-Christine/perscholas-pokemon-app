const express = require('express')

//====App init
const app = express()
const PORT = 3000

//====Listen
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

//====Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})