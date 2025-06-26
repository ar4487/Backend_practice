function curry(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
console.log(curry(2)(3)(4))