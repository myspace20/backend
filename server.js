const http = require('http')
const { readFile } = require('fs')

const server = http.createServer((req,res)=>{
   res.setHeader("Content-Type", "text/html")

   let path = './views/'

   switch(req.url){

    case '/':
        path += "index.html"
        res.statusCode = 200;
        break;
    case '/about':
        path += "about.html"
        res.statusCode = 200;
        break;
    case '/about-me':
        res.setHeader("Location", '/about')
        res.statusCode = 301;
        res.end()
        break;
    default:
        path += '404.html'
        res.statusCode = 404;
        break; 
   }

   readFile(path, (err, data)=>{
    if(err){
        console.log(err)
        res.end()
    }else{
        res.end(data)
    }
   })
   
})


server.listen(3000, 'localhost', ()=>{
    console.log("server is running")
})