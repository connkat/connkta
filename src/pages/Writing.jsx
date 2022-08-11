import React from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";

import PostCard from "../components/Medium/PostCard";
import "./Writing.css";

class Writing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemRows: [], avatar: "", profileLink: "" };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Connkat";

  async componentDidMount() {
    await axios
      .get(this.mediumURL)
      .then(async (res) => await res.data)
      .then((data) => {
        // create two-dimensional array with 3 elements per inner array
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0);

        this.setState({ avatar: avatar, profileLink: profileLink });
        const itemRows = [];
        posts.forEach((item, i) => {
          item["avatar"] = this.state.avatar; // push avatar inside the json
          item["profilelink"] = this.state.profileLink; // push profile link inside the JSON
          const row = Math.floor(i / 3);
          if (!itemRows[row]) itemRows[row] = [];
          itemRows[row].push(item);
        });

        this.setState({ itemRows: itemRows });
        console.log("11111", posts.length);
      });
  }
  render() {
    const { itemRows } = this.state;

    return (
      <div className="writing-page">
        <div className="writing-title">
          <h2>
            I like to publish articles on{" "}
            <a href="https://medium.com/@connkat">Medium</a>, here are my most
            recent ones:
          </h2>
        </div>
        <Grid container spacing={1}>
          {itemRows
            .slice(0, 3)
            .map((row, id) =>
              row.map((item, key) => <PostCard {...item} key={key} />)
            )}
        </Grid>
      </div>
    );
  }
}
export default Writing;
