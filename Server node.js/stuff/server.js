const express = require('express')

const app = express()
app.set('view engine', 'ejs')

app.use(
    express.urlencoded({
      extended: true
    })
  )

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('/assets'));

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/successpage', (req,res,next)=>{
    console.log(req.body)
    res.render('successpage', {data:req.body})
});

app.get('/contact', (req,res) => {
    res.render('contact')
})

app.get('/profile/:name', (req, res) => {
    var data = { age:20, gender: 'M'}
    res.render('profile', {person: req.params.name, data:data})
})

app.listen(3000)