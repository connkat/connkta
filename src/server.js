import axios from "axios";
import { setState } from "react";

const mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Connkat";

async function getMedium() {}
axios
  .get(mediumURL)
  .then(async (res) => await res.data)
  .then((data) => {
    // create two-dimensional array with 3 elements per inner array
    const avatar = data.feed.image;
    const profileLink = data.feed.link;
    const res = data.items; //This is an array with the content. No feed, no info about author etc..
    const posts = res.filter((item) => item.categories.length > 0);

    setState({ avatar: avatar, profileLink: profileLink });
    const itemRows = [];
    posts.forEach((item, i) => {
      item["avatar"] = avatar; // push avatar inside the json
      item["profilelink"] = profileLink; // push profile link inside the JSON
      const row = Math.floor(i / 3);
      if (!itemRows[row]) itemRows[row] = [];
      itemRows[row].push(item);
    });

    setState({ itemRows: itemRows });
  });

export default getMedium;
