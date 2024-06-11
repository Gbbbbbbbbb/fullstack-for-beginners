import Video from "../models/Video";

const handleSearch = (error, videos) => {
  console.log("errors", error);
  console.log("videos", videos);
};

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};
//fakeUser:fakeUser = fakeUser
export const watch = (req, res) => {
  const { id } = req.params; //const id = req.params.id; 같은것
  res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params; //const id = req.params.id; 같은것
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  // const title = req.body.title;
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  const dbVideo = await video.save();
  console.log(dbVideo);
  return res.redirect("/");
};

//res.send 에 우리는 html을 보낼수있었다 하지만 그렇게 하면 코드가 복잡해지므로 pug라는 view 템플릿을 사용하여 렌더링을통해서 html을 형성할 수 있었다 랜더링에sms view의 이름이 들어간다 view의 이름은  .pug 로 끝난다
