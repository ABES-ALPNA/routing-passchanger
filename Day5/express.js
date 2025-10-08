const express = require("express");
const app = express();
const data = require("./data");
app.use(express.json());
const PORT = 3000;

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.users.findIndex((u) => u.id === id);
  if (index !== -1) {
    const delteduser = data.users.splice(index, 1);
    res.json({
      message: "delete successfully",
      data: delteduser[0],
    });
  } else {
    res.json({
      message: "not deleted",
    });
  }
});
