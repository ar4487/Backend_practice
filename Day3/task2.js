const fs= require('fs')
const {Transform}= require('stream')

const reverse = new Transform({
    transform(chunk,encoding,callback){
        const reverse=chunk.toString().split('').reverse().join('')
        this.push(reverse)
    }
})

const inputFile='input.txt'
const outputFile='output_reversed.txt'

const input= fs.createReadStream(inputFile)
const output=fs.createWriteStream(outputFile)

input.pipe(reverse).pipe(output)
console.log(`Reversed text from ${inputFile} written to ${outputFile}`);