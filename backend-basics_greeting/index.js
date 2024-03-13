import { server } from "./server.js";

// server.listen(…
const port = 1234;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
