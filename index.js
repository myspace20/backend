

//The Global Object

console.log(global)

global.setTimeout(()=>{
    console.log("Time is Up")
    clearInterval(every)
},3000)

const every = global.setInterval(()=>{
    console.log("I will run every second")
},1000)


//Modules


const { people, ages, totalMem, cpusData, userInfo } = require('./modules')


console.log(people, ages, totalMem, cpusData, userInfo)


server.listen(3000, 'localhost', ()=>{
    console.log("server is running")
})




