export const getJoin = (req, res) => res.render("join", { pageTitle: "join" });
export const postJoin = (req, res) => {
  console.log(req.body);
  res.end();
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("remove User");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const see = (req, res) => {
  console.log(req.params);
  res.send("See User");
};
