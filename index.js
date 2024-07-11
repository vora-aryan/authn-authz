const express = require(`express`);
const connectDb = require("./config/database");
const userRouter = require("./routes/userRouter");
const app = express();

const PORT = 8001;

connectDb();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello");
});

app.use("/user", userRouter);

app.listen(PORT, () => console.log("Server Started"));
