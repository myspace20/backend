const express = require('express')


//creating express instance
const app = express ()

app.set('view engine', 'ejs')

//home route
app.get('/', (req, res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', { title: 'Home', blogs})
})

//about route
app.get('/about',(req, res)=>{
    res.render('about', { title: 'About'})
})

//about route redirect
app.get('/about-us', (req, res)=>{
    res.render('about')
})

//404 middleware
app.use((req, res)=>{
    res.status(404).render('404',{ title: '404'} )
})



app.listen(4000)