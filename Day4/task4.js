function combinedObject(obj1,obj2){
return {...obj1,...obj2}
}
const myObj1={
    name:"arpit",
    age:24
}
const myObj2={
   city:"delhi"
}

console.log(combinedObject(myObj1,myObj2))
function average(...number){
    if(number.length===0){
        return 0
    }
    const sum =number.reduce((acc,cur)=>acc+cur,0)
    return sum/number.length
}
const avg = average(10, 20, 30, 40);
console.log(avg); // Output: 25

const avg2 = average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(avg2); // Output: 5.5

const avg3 = average();
console.log(avg3); // Output: 0