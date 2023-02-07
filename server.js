const { createServer } = require('http')
const { readFile } = require('fs')

//creating server
const server = createServer((req,res)=>{
   res.setHeader("Content-Type", "text/html")

   //setting the up the file directory path
   let filePath = './views/'

   //using conditionals to render pages based on request url
   switch(req.url){

    case '/':
        filePath += "index.html"
        res.statusCode = 200;
        break;
    case '/about':
        filePath += "about.html"
        res.statusCode = 200;
        break;
    case '/about-me':
        res.setHeader("Location", '/about')
        res.statusCode = 301;
        res.end()
        break;
    default:
        filePath += '404.html'
        res.statusCode = 404;
        break; 
   }

   //Reading html document based on file path
   readFile(filePath, (err, data)=>{
    if(err){
        console.log(err)
        res.end()
    }else{
        res.end(data)
    }
   })
   
})

//listening to server on port 3000
server.listen(3000, 'localhost', ()=>{
    console.log("server is running")
})