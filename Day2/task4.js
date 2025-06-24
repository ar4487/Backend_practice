console.log("sync code")
process.nextTick(()=>console.log('nextTick'))
Promise.resolve().then(()=>console.log("promise"))
setTimeout(()=>console.log('setTimeout'),3000)
