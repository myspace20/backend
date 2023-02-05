const { readFile, writeFile,existsSync, mkdir, unlink, open } = require('fs')

const data = "Welcome to My Backend Practice Repo \nIt contains data on my progress as a Junior - Mid level Software Developer\nDay 1: Created my firsr Server using the http module\nDay 2: Learnt how to export and import modules in NodeJs\nDay 3: Learnt how to read and write to a file using the fs module"


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


if(!existsSync('./assets')){
    mkdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }
        console.log("Successfully Created")
    })
}else{
    throw new Error("Folder already exists")
}

if(!existsSync('sample.txt')){
    open('sample.txt', 'w', (err, file)=>{
        if(err){
            console.log(err)
        }
        console.log('file created successfully :'+ file)
    })
}else{
    throw new Error("File already exists")
}

if(existsSync('sample.txt')){
    unlink('sample.txt', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('Successfully deleted')
    })
}



writeToFile('README.md', data)
// console.log(readMyfile('./text.txt'))


