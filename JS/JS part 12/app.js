// Asyn fucntion
async function greet(){
    // throw "throws some errors"    // used to throw any error
    return "hello world";    //returns a promise 
}

greet()
.then((result) =>  {
    console.log("promise was resolved")
})   // on fulfillment(resolution)

.catch((err) => {
    console.error(`Error: ${err}`);     //on rejection (if error occurs
} );