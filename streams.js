const { createReadStream, createWriteStream } = require('fs')

const readStream = createReadStream('README.md', {encoding:'utf-8'})
const writeStream = createWriteStream('sample.txt')



// readStream.on('data', (chunk)=>{
//     console.log(chunk)
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)