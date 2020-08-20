export const join = (req, res) => res.send("Join", { pageTitle: "Join" });
export const login = (req, res) => res.send("Login", { pageTitle: "Login" });
export const logout = (req, res) => res.send("Logout", { pageTitle: "Logout" });
export const users = (req, res) => res.send("users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.send("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.send("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.send("changePassword", { pageTitle: "Change Password" });
