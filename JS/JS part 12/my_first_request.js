let url = "https://catfact.ninja/fact";

fetch(url)
.then((res) =>{
    console.log(res);
    return res.json();       // readable format
    })          
.then((data) => {            
    console.log(data);
    console.log(data.fact);
    console.log(data.length) ;
})
.catch((err) => {
    console.log("ERROR -", err);
});