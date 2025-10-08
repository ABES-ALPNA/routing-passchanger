const fs = require("fs");

fs.writeFile("message.txt", "Node.js File System Working!", (err) => {
  if (err) throw err;
  console.log("File created successfully");
});
