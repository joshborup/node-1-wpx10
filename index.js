// we need to require files in node (import happens in react, node will eventually support imports)
const express = require("express");
// invoking express gives us access to the Rest methods
const app = express();
const bodyParser = require("body-parser");
const cC = require("./controller/customerController");

// Top level middleware

// bodyParser is required if we need access to the body object on any incoming request, otherwise data is accessed on params or query object.
app.use(bodyParser.json());

app.set("json spaces", 2); // number of spaces for indentation

app.get("/api/customers", cC.read);

app.get("/api/customer", function(req, res) {
  let foundCustomer = customerNames.filter(customer => {
    return customer.id == req.query.id;
  });

  res.status(200).json(foundCustomer);
});

//this endpoint has a parameter denoted by the colon
app.post("/api/customers/:name", cC.create);

// parameter way
// vvvvvvvvvvvvvvvv

// app.put("/api/customers/:oldName/:newName", (req, res) => {
//   let { oldName, newName } = req.params;

//   let index = customerNames.findIndex(customer => customer.name == oldName);
//   if (index !== -1) {
//     customerNames[index].name = newName;
//     res.status(200).json(customerNames);
//   }
// });

//body way
// vvvvvvvvvvvvvvvv

app.put("/api/customers", (req, res) => {
  let { oldName, newName } = req.body;

  let index = customerNames.findIndex(customer => customer.name == oldName);
  if (index !== -1) {
    customerNames[index].name = newName;
    res.status(200).json(customerNames);
  }
});

// don't use ports below 1024

const port = 3000;
// console logging the port number for the second argument makes it easier to tell if express is working and which port its listening on
app.listen(port, () => console.log(`Server listening on port ${port}`));
