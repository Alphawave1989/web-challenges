import { createServer } from "node:http";

// export const server = …
export const server = createServer((request, response) => {
  if (request.url === "/hello") {
    response.statusCode = 200;
    response.end("Hello Backend");
  } else if (request.url === "/bye") {
    response.statusCode = 200;
    response.end("Bye Backend");
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("Hallo Ricardo");
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
