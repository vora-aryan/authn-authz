const login = async (req, res) => {
  return res.send("user login");
};
const signup = async (req, res) => {
  return res.send("user signup");
};

module.exports = { login, signup };
