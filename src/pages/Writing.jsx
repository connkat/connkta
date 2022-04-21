import axios from "axios";
import { useEffect, useState } from "react";
import WritingComponent from "../components/WritingComponent";

function Writing() {
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@connkat";

  const [profile, setProfile] = useState({
    name: "Kat Connolly",
    profileImage: "",
    profileUrl: "",
  });

  const [blog, setBlog] = useState({
    item: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    axios
      .get(mediumURL)
      .then((info) => {
        const image = info.data.feed.image;
        const link = info.data.feed.link;
        const blogs = info.data.items;
        const posts = blogs.filter((post) => post.categories.length > 0);

        setProfile((p) => ({ ...p, profileUrl: link, profileImage: image }));
        setBlog({ item: posts, isloading: false });
      })
      .catch((err) => setBlog({ error: err.message }));
  }, [axios]);

  return (
    <>
    <p>HIIII</p>
    <p>HIIII</p>
    <p>HIIII</p>
    <p>HIIII</p>
    <p>HIIII</p>
    <p>HIIII</p>
    <p>HIIII</p>
    <p>HIIII</p>
    <p>HIIII</p>
      {/* <WritingComponent blog={blog} profile={profile} /> */}
    </>
  );
}

export default Writing;
