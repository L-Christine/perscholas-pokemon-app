const express = require('express');
const morgan = require('morgan')
const allPokemon = require('./models/pokemon');
require('dotenv').config()
const mongoose = require('mongoose')
const dbPokemon = require('./models/modelPokemon')

//====App init
const app = express()
const PORT = 3000

//====Middleware
app.use(morgan('dev'))
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

    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    
    mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
})

//====Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

//==index data from array
// app.get('/pokemon', (req, res) => {
//     res.render('Index', {allPokemon:allPokemon})
// })

app.get('/pokemon', (req, res) => {
    //data from DB, not array
    dbPokemon.find({}, (err, pokemonFromDB) => {
        res.render('Index', {allPokemon:pokemonFromDB})
    })
})

app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

//====Create
app.post('/pokemon', (req, res) => {

    dbPokemon.create(req.body, (error, newPokemon) => {
        if (error){
            console.log(error);
        }
        console.log(newPokemon);
        res.redirect('/pokemon')
    })
    // allPokemon.push(req.body)
    // console.log(allPokemon)
    // res.redirect('/pokemon')
})


//====Read by Id + add Show route
app.get('/pokemon/:id', (req, res) => {
    const {id} = req.params
    // res.render('Show', {seePokemon:allPokemon[req.params.id]}) 
    dbPokemon.findById(id, (error, foundPokemon) => {
        res.render('Show', {
            seePokemon: foundPokemon
            //allPokemon from Show.jsx
        })
    })
})
