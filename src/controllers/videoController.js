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
export const watch = async (req, res) => {
  const { id } = req.params; //const id = req.params.id; 같은것
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  return res.render("watch", { pageTitle: video.title, video: video });
};
export const getEdit = async (req, res) => {
  const { id } = req.params; //const id = req.params.id; 같은것
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  return res.render("edit", { pageTitle: `Edit: ${video.title}`, video });
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  // const title = req.body.title;
  await Video.findByIdAndUpdate(id, {
    title: title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  // video.title = title;
  // video.description = description;
  // video.hashtags = hashtags
  //   .split(",")
  //   .map((word) => (word.startsWith("#") ? word : `#${word}`)); 위에랑 같은 것
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

//res.send 에 우리는 html을 보낼수있었다 하지만 그렇게 하면 코드가 복잡해지므로 pug라는 view 템플릿을 사용하여 렌더링을통해서 html을 형성할 수 있었다 랜더링에sms view의 이름이 들어간다 view의 이름은  .pug 로 끝난다
