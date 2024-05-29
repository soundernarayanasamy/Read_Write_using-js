const fs = require("fs");

// fs.writeFile("new.txt", "Hello from Narayna", (err) =>  {
//     if(err) throw err;
//     console.log("The file has saved.");
// });


fs.readFile('new.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 