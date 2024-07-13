const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const { setUser } = require("../services/authService");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.json({ msg: "all fields are required" });

    const userExists = await userModel.findOne({ email });

    if (userExists) {
      const isValidUser = await bcrypt.compare(password, userExists.password);
      if (isValidUser) {
        const payload = {
          id: userExists._id,
          email: userExists.email,
          role: userExists.role,
        };

        const token = setUser(payload);

        res.cookie("uid", token);

        console.log(token);

        return res.status(200).json({
          msg: "logged in successfully",
        });
      } else {
        return res.status(400).json({
          msg: "invalid details",
        });
      }
    }
  } catch (error) {
    console.log("Something went wrong:" + error.message);
  }
};
const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await userModel.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "user already exists",
      });
    }

    let hashedPassword;

    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      console.log("error in hashing password");
    }

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    return res.status(200).json({
      message: "user created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login, signup };
