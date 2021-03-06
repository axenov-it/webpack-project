import { getPosts } from "../requests";
import Post from "../elements/Post";

import "./renderPosts.css";

const renderPosts = async () => {
  const container = document.querySelector("#app");
  const postsBlock = document.createElement("div");
  postsBlock.className = "posts";

  const posts = await getPosts();

  const dataHtml = posts.map((post) => new Post(post));

  postsBlock.append(...dataHtml);
  container.appendChild(postsBlock);
};

export default renderPosts;
