const http = require("http");
const { url } = require("inspector");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  const url = req.url;

  //home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>home page</h2>");
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>about page</h2>");
    res.end();
  }
  //error page 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h2>Page not found</h2>");
    res.end();
  }

});

server.listen(1984);
