import toText from "../utils/utils";

function WritingComponent({ blog, profile }) {
  const getWriting = () => {
    if (blog.item) {
      return blog.item.map((post, index) => {
        <div key={index}>
          <div style={{ backgroundImage: `url(${post.thumbnail})` }}>
            <div className="authorImg">
              <a
                href={profile.profileURL}
                rel="noopener noreferrer"
                target="_blank"
                style={{ backgroundImage: `url(${profile.profileImage})` }}
              ></a>
            </div>
          </div>
          <div>
            <h5>
              <a href={post.link} rel="noreferrer" target="_blank">
                {post.title}
              </a>
            </h5>
            <p>{`${toText(post.description.substring(0, 1000))}...`}</p>
          </div>
        </div>;
      });
    }
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      <div>{blog.isLoading ? "Loading..." : getWriting()}</div>
    </div>
  );
}

export default WritingComponent;
