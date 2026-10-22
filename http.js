const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method;
  const requestUrl = new URL(req.url ?? "/", `http://${req.headers.host}`);
  const pathname = requestUrl.pathname;

  res.setHeader("Content-Type", "text/plain");

  // GET /
  if (method === "GET" && pathname === "/") {
    res.statusCode = 200;
    return res.end("Hello");
  }

  // GET /user/:id
  if (method === "GET" && pathname.startsWith("/user/")) {
    const id = pathname.split("/")[2];

    res.statusCode = 200;
    return res.end(`User ID: ${id}`);
  }

  // GET /search?name=Sundar&age=25
  if (method === "GET" && pathname === "/search") {
    const name = requestUrl.searchParams.get("name");
    const age = requestUrl.searchParams.get("age");

    res.statusCode = 200;
    return res.end(`Name: ${name}, Age: ${age}`);
  }

  if (method === "POST" && pathname === "/users") {
    const chunks = [];

    req.on("data", (chunk) => {
        chunks.push(chunk);
    });

    req.on("end", () => {
        try {
            const rawBody = Buffer.concat(chunks).toString("utf8");

            if (!rawBody) {
                res.statusCode = 400;
                return res.end("Request body is required");
            }

            const body = JSON.parse(rawBody);

            if (!body.name || !body.email) {
                res.statusCode = 400;
                return res.end("Both name and email are required");
            }

            console.log(body);

            res.statusCode = 201;
            res.end("Created successfully");
        } catch (err) {
            console.error(err);
            res.statusCode = 400;
            res.end("Invalid JSON");
        }
    });

    req.on("error", (err) => {
        console.error(err);
        res.statusCode = 500;
        res.end("Something went wrong");
    });

    return;
}

  // 404
  res.statusCode = 404;
  res.end("Route Not Found");
});

server.listen(9000, () => {
  console.log("Server running on http://localhost:9000");
});