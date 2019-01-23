let customerNames = [
  { id: 1, name: "josh" },
  { id: 2, name: "travis" },
  { id: 3, name: "hunter" },
  { id: 4, name: "sean" },
  { id: 5, name: "michael" }
];

let id = 6;

module.exports = {
  read: (req, res) => {
    console.log(req);
    res.status(200).json(customerNames);
  },
  create: (req, res) => {
    let { name } = req.params;
    customerNames.push({ id: id, name: name });
    id++;
    res.status(200).json(customerNames);
  }
};
