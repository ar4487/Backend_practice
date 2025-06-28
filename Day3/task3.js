const full_name = "Arpit Bhadoria"
const buf= Buffer.from(full_name,"utf-8")
console.log("Original buffer:", buf);
console.log("Original string:", buf.toString());

const FirstName_buf=buf.slice(0,5)
console.log("First name buffer",FirstName_buf)
console.log("First name string:", FirstName_buf.toString());

buf[0]='x'.charCodeAt(0)
console.log("Modified buffer:", buf);
console.log("Modified string:", buf.toString());