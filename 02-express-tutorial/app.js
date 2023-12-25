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
  )
  if (!singleProducts){
    return res.status(404).send("Product not found");
  }
  console.log(singleProducts);

  res.json(singleProducts);

});

app.get("/api/people/:peopleID", (req, res) => {
  const { peopleID } = req.params;
  const singlePeople = people.find((people) => people.id === Number(peopleID));
  if (!singlePeople) {
    return res.status(404).send("People does not exist");
  }
  //console.log(singlePeople);

  return res.json(singlePeople);  
})
app.get('/api/people/:peopleID/reviews/:reviewID',(req, res)=> {
  console.log(req.params.peopleID);
  res.send('hello world');
})

app.get('/api/v1/query', (req, res)=> {
  //console.log(req.query);
  const { search, limit } = req.query
  let sortedProducts =[...products]

  if(search){
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search)
    })
    
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0,Number(limit)) 
  }
  if(sortedProducts.length < 1 ){
    //res.status(200).send('no products matching your search')
     return res.status(200).json({success: true, data:[]});
  }
  res.status(200).json(sortedProducts)
})

app.listen(1992, () => {
  console.log("Server is listening on port 1992..... ");
});
