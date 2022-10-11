const express = require('express');
const vegetables = require('../express-fruits/models/vegetables');
const allPokemon = require('./models/pokemon');

//====App init
const app = express()
const PORT = 3000

//====Middleware
// app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
// app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log('Run for all routes');
    next();
})

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
    res.render('Index', {allPokemon:allPokemon})
})

app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

//====Create
app.post('/pokemon', (req, res) => {
    allPokemon.push(req.body)
    console.log(allPokemon)
    res.redirect('/pokemon')
})



app.get('/pokemon/:id', (req, res) => {
    const {id} = req.params
    res.render('Show', {allPokemon:allPokemon[req.params.id]})
})
