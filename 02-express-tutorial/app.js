const express = require("express");
const app = express();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send(
    '<h1>Home Page</h1><a href="/api/products">products</a> <br> <a href="/api/people">people</a> '
  );
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});
app.get("/api/people", (req, res) => {
  const newPeople = people.map((people) => {
    const { id, name } = people;
    return { id, name };
  });

  res.json(newPeople);
});
app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  // console.log(req.params);

  const { productID } = req.params;
  const singleProducts = products.find(
    (products) => products.id === Number(productID)
  );

  res.json(singleProducts);
});
app.get("/api/people/:peopleID", (req, res) => {
  const { peopleID } = req.params;
  const singlePeople = people.find((people) => people.id === Number(peopleID));
  if (!singlePeople) {
    return res.status(404).send("People does not exist");
  }
  console.log(singlePeople);

  return res.json(singlePeople);
});

app.listen(1992, () => {
  console.log("Server is listening on port 1992..... ");
});
