const express = require(`express`);
const connectDb = require("./config/database");
const userRouter = require("./routes/userRouter");
const loginValidator = require("./middlewares/loginValidator");
const app = express();
const cookieparser = require("cookie-parser");
const adminAuth = require("./middlewares/adminAuth");

const PORT = 8001;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

app.get("/", (req, res) => {
  return res.send("Hello");
});

app.use("/user/profile", loginValidator);
app.use("/admin/profile", adminAuth);
app.get("/user/profile", (req, res) => {
  return res.send("profile");
});
app.get("/admin/profile", (req, res) => {
  return res.send("admin profile");
});

app.use("/user", userRouter);

app.listen(PORT, () => console.log("Server Started"));
