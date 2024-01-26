let inp = document.querySelector("input");


// inp.addEventListener("keydown", function(){
inp.addEventListener("keyup", function(event){
// inp.addEventListener("keyup", (event) =>{


    console.log(`code = ${event.code}`);
    // console.log("key released!");
    // console.log(event);
    // console.log(`key = ${event.key}`);
    // console.log(`key = ${event.code}`);


    //Arrowup(U), Arrowdown(D), ArrowLeft(L), ArrowRight(R)
    if (event.code == 'KeyU' ) {
        console.log("character moves up")
    } else if (event.code == 'KeyD') {
        console.log("character moves down")
    } else if(event.code == 'KeyL'){
        console.log('Character moves left')
    } else if(event.code == 'KeyR'){
        console.log('Character moves right');
        }
    });