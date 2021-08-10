const exJS = require("express");

const app = exJS();

const result = "Me Maa tooo why only 3000 ???";

app.get("/", (request, response) => {
  response.send(result);
  //   console.log(request);
});

app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`${date} is today Date`);
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
