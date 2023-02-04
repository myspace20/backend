const { readFile, writeFile } = require('fs')

const readMyfile = (file) => {
    readFile(file, 'utf8', (err, data) => {
        if (err) throw err
        console.log(data)
    })
}


const writeToFile = (file, data) => {
    writeFile(file, data, (err) => {
        if (err) throw err
        console.log("Successfully written to !")
        readMyfile(file)
    })
}


const data = "Welcome to My Backend Practice Repo \nIt contains data on my progress as a Junior - Mid level Software Developer\nDay 1: Created my firsr Server using the http module\nDay 2: Learnt how to export and import modules in NodeJs\nDay 3: Learnt how to read and write to a file using the fs module"

writeToFile('README.md', data)
// console.log(readMyfile('./text.txt'))


