const express = require("express");
const app = express();
const data = require("./data");
app.use(express.json());
const PORT = 3000;

let books = [
  { id: 1, name: "book1" },
  { id: 2, name: "book2" },
  { id: 3, name: "book3" },
];

app.get("/books", (req, res) => {
  res.json({ books });
});

app.post("/books", (req, res) => {
  const { title, author, year, status } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    year,
    status: "available" || "issued",
  };
  books.push(newBook);
  res.json(newBook);
});
