let form = document.querySelector("form");
form.addEventListener("submit", function(event){   //event: it is default parameter
    event.preventDefault();
    // let inp = document.querySelector("input");
    // console.dir(inp);
    // console.dir(inp.value);

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    // let user = this.element[0];  //form.element[0];
    // let pass = this.element[0];
    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});



//Text editor
// let inp = document.querySelector("input");
// let p = document.querySelector("p");

// inp.addEventListener("input", (event) =>{
//   console.log(inp.value);
//     p.innerText = inp.value;
// })