const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const rangeMiddleware = require("./range"); // Import your range.js file

const port = process.env.PORT || 8080;

// Use your custom middleware to handle Content-Range header
server.use(rangeMiddleware);

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
