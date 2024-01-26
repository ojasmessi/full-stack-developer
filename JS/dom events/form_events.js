let form = document.querySelector("form");
form.addEventListener("submit", function(event){   //event: it is default parameter
    event.preventDefault();
    console.log("form submitted");
    alert("hurray!");
});