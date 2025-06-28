const fs = require('fs')
const zlib = require('zlib')

const input = fs.createReadStream('large-file.txt')
const output = fs.createWriteStream('large-file.txt.gz')
input.pipe(zlib.createGzip()).pipe(output)
output.on('finish',()=> {console.log('compression ended')

const input1 = fs.createReadStream('large-file.txt.gz')
const output1=fs.createWriteStream('uncompressed.txt')

input1.pipe(zlib.createGunzip()).pipe(output1)
output1.on('finish',()=> console.log('decompression ended'))
})

