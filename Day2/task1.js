function createCounter(){
    let count =0
    return{

        increment:function(){
            count++
            console.log(count)
        },
        decrement:function(){
            count--
            console.log(count)
        },
        value:function(){
            console.log(count)
        }
    }
}
const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
counter.value();     
