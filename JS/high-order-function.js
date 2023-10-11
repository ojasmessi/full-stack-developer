// high order function
/*  
1: function as a argument
*/
function multipleGreet(func, n) {   // func: as a argument
    for(let i = 1; i<=n; i++){
        func();
    }
}

let greet1 = function(){
    console.log("hello");   // function expression  (NAMELESS function)
}

multipleGreet(greet1,2);
// multipleGreet(function(){console.log("hello")})   -> can be called as this.


/* 
2: returns as a function
*/

function oddevenFactory(req) {
    if (req == "odd") {
        let odd = function(n){
            console.log(!(n%2==0));
        }    
        return odd;
    } else if (req == "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    } else{
        console.log("wrong req");
    }
}


