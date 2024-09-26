const express = require("express");

const app = express();

const PORT = 3030;

app.get("/api/house", (req, res) => {
  const data = [
    {
      house: 1,
      name: "Phong",
    },
    {
        house: 2,
        name: 'Nghi'
    },
    {
        house: 3,
        name: 'Tuan'
    },
    {
        house: 4,
        name: 'Yeong'
    }
  ];
  res.json(data);
});
app.listen(PORT, () => console.log("App listening on port http://localhost:"+ PORT ));