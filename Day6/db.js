const mongoose = require("mongoose");
async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://vivekvermaaug26_db_user:pnLA2cusRKn2zhfg@cluster0.0506uv0.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
}
connectDB();
module.exports = connectDB;
