const express = require('express')
const hbs = require('hbs')
const path = require('path')

const PORT = 3000
const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(exoress.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/works', (req, res) => {
    res.render('works')
})

app.get('/photoGallery', (req, res) => {
    res.render('photoGallery')
})

app.get('*', (req, res) => {
    res.send("<h1>404</h1>")
})

app.listen(PORT, () => console.log('🏃‍ on port ${PORT}'))