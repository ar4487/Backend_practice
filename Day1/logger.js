function log(message){
    const now = new Date().toISOString().replace('T', ' ').split('.')[0];
    console.log(`[${now}] ${message}`);
}
module.exports={log}