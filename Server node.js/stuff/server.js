import express from 'express'
import path from 'path'

const app = express()
app.set('view engine', 'ejs')

app.use(express.static(path.join('assets')))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contact', (req,res) => {
    
    res.render('contact')
})

app.get('/profile/:name', (req, res) => {
    var data = { age:20, gender: 'M'}
    res.render('profile', {person: req.params.name, data:data})
})

app.listen(3000)