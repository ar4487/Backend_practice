const fs = require('fs')
const fs1 = require('fs').promises;

const data= fs.readFileSync('input.txt','utf-8')
fs.writeFileSync('output_sync.txt',data)
console.log(data)

fs.readFile('input.txt','utf-8',(err,data)=>{
    if(err) throw err
    
    console.log(data)
})
fs.writeFile('output_callback.txt',data,(err,data)=>{
    if(err) throw err
    console.log("Data written Sucessfully")
})

fs1.readFile('input.txt', 'utf8')
    .then(dataPromise => {
        return fs1.writeFile('output_promise.txt', dataPromise);
    })
    .then(() => {
        console.log('Promise-based read and write complete.');
    })
    .catch(err => {
        console.error('Promise-based operation error:', err);
    });

async function read() {
    try {
        const data = await fs1.readFile("input.txt",'utf-8')
        fs1.writeFile("output_async.txt",data)
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
read()