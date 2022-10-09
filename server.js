const express = require('express');
const pokemon = require('./models/pokemon');

//====App init
const app = express()
const PORT = 3000

//====App settings
app.set('view engine', 'jsx')
app.engine('jsx', require ('express-react-views').createEngine())

//====Listen
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

//====Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    // res.send(pokemon)
    res.render('Index')
})