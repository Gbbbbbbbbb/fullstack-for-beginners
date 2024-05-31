const fakeUser = {
  username: "Gibeom",
  loggedIn: true,
};

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", fakeUser: fakeUser });
};
//fakeUser:fakeUser = fakeUser
export const see = (req, res) => {
  res.render("watch");
};
export const edit = (req, res) => {
  res.render("edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");

//res.send 에 우리는 html을 보낼수있었다 하지만 그렇게 하면 코드가 복잡해지므로 pug라는 view 템플릿을 사용하여 렌더링을통해서 html을 형성할 수 있었다 랜더링에sms view의 이름이 들어간다 view의 이름은  .pug 로 끝난다
