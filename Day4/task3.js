const user={
    name:'Arpit',
    email:'arpitbhadoria9@gmail.com',
    address:{
        city:"Delhi",
        pin:201005
    }
}
const{name,email}=user
const{city,pin}=user.address
console.log(name,email)
console.log(city,pin)

let num1 =10;
let num2=20;
[num1,num2]=[num2,num1]
console.log(num1,num2)
//console.log(num2);

const array=[1,2,3,4,5]
const[first,second,...rest]=array
console.log(first,second,rest)