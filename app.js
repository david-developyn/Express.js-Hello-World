const express = (require("express"))();

express.get("/", (request, response) => {
  response.send("Hello World");
});

express.get("/:name", (request, response) => {
  response.send(`Hello ${request.params.name}`);
});

express.listen(3000);
