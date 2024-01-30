const figlet = require("figlet");

figlet("Hello World!", function (err, data){
    if (err) {
        console.log("Something is wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});