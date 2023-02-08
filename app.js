const express = require('express')


//creating express instance
const app = express ()

//home route
app.get('/', (req, res, next)=>{
    res.sendFile('./views/index.html', {root: __dirname})
})

//about route
app.get('/about',(req, res)=>{
    res.sendFile('./views/about.html', {root: __dirname})
})

//about route redirect
app.get('/about-us', (req, res)=>{
    res.redirect('/about')
})

//404 middleware
app.use((req, res)=>{
    res.status(404).sendFile('./views/404.html', {root:__dirname})
})



app.listen(4000)