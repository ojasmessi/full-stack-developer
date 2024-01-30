let btn = document.querySelector("button");
btn.addEventListener("click", async () =>{
    // console.log("button was clicked");
    let fact = await getFacts();            // await: to wait for the valid result
    console.log(fact);
    let p = document.getElementById("result");
    // let p = document.querySelector("#result");
    p.innerText = fact;
})



let url = "https://catfact.ninja/fact";
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
        // console.log(res.data);
        // console.log(res.data.fact);
    } catch (e) {
        console.log("EROR -", e);
    }
}