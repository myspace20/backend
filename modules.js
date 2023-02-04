const people = ['shaun', 'mario', 'luigi']
const ages = [1,2,3,41,5,6]


//Os module

const os = require('os')


const cpus = os.cpus()

const userInfo = os.userInfo()

const totalMem = os.totalmem()

console.log("UserInfo :", userInfo)
console.log("Total Mem :", totalMem)

let cpusData = []

cpus.forEach(cpu=>{
    console.log(cpu.model, cpu.speed)
    cpusData.push({model:cpu.model, speed:cpu.speed})
})



module.exports = {
    people,
    ages,
    totalMem,
    userInfo,
    cpusData
}