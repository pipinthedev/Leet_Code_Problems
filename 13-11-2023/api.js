const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    const choice = req.query.choice;
    var no1 = req.query.no1;
    var no2 = req.query.no2;
    switch (choice) { 
        case "add":
         res.send(no1 + no2);
         break;
         case "sub":
         res.send(no1 - no2);
         break;
         case "multiply":
         res.send(no1 * no2);
         break;
         case "divide":
         res.send(no1 / no2);
         break;
         case "mod":
         res.send(no1 % no2);
         break;
         case "exit":
          res.send("Closing");
          app.close();
    }
  });

app.listen(port, () => {
    console.log("listening on port " + port);
});
