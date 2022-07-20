/**
 * API vs. SSR
 * In most cases we use Express.js to create API or templates with SSR (Server Side Rendering).
 *
 * API:
 * - JSON (JavaScript Object Notation)
 * - Send Data
 * - res.json(), for sending back JSON data
 *
 * SSR:
 * - Template
 * - Send Template in HTML
 * - res.render()
 *
 * In our exaples we use API. But if you understand API you can implement SSR easily.
 */

const express = require("express");
const app = express();
const { products } = require("./content/data");

/* 
    REALLY SIMPLE API
    Here we can even use '/api/products' instead of '/' if we want to expose the products in our API
*/

/* app.get("/", (req, res) => {
  res.json(products);
}); */

/* 
    MORE COMPLEX API
*/

// Homepage with a link to the API
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1></br><a href='/api/products'>Products</a>");
});

// Return all products with only id, name and image
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

// Return the single product based on ID in the URL
app.get("/api/products/:productID", (req, res) => {
  // :productID is a placeholder for the ID of the product. We can use whatever we want here.
  const singleProduct = products.find(
    (product) => product.id == req.params.productID // We use == and not === because 'req.params.productID' is a string
  );

  // If product is not found, return 404
  if (!singleProduct) {
    return res.status(404).send("Product not found");
  }

  res.json(singleProduct);
});

// Query filter the products based on the query string
app.get("/api/query", (req, res) => {
  // Example URL: localhost:5000/api/query?search=a&limit=2
  const { search, limit } = req.query;
  let sortedProducts = [...products]; // If no search query is provided, we return all products

  // If search is not empty, filter the products
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  // If limit is not empty, limit the products
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  // If no products are found, return a specific message
  if (sortedProducts.length === 0) {
    // We have to use 'return' because, if not, the server will send the status regardless of the condition
    /* return res.status(200).send("No products matched your search"); */ // First approach. Sending a specific message
    return res.status(200).json([{ success: true, data: null }]); // Second approach. Sending a JSON with success: true and data: null
  }

  res.json(sortedProducts);
});

app.listen(5000, () => {
  console.log("server is listening port 5000");
});
