// Promise object
function savetoDb(data){
return new Promise ((resolve, reject) => {                      // succes = resolve,  failure = reject
    let internetspeed = Math.floor(Math.random() *10) + 1;
    if (internetspeed > 4) {
        resolve("success : data saved");
    } else {
        reject("failure: weak data")
    }
});
}




// this() and catch()

savetoDb("ojas patil")
.then(() =>{
    console.log("promise was resolved");
    // console.log(request);
})
.catch(() =>{
    console.log("promise was rejected");
    // console.log(request);
})



// Promise chaining

savetoDb("apna college")
.then((result) => {
    console.log("data1 saved")
    console.log("result of promise:", result);
    return savetoDb("hello");
})
.then((result) => {
    console.log("data2 saved")
    console.log("result of promise:", result);
    return savetoDb("ojas");
})
.then((result) => {
    console.log("data3 saved")
    console.log("result of promise:", result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise:", error);
}); 
