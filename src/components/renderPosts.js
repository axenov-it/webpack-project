import { getPosts } from "../requests";
import Post from "../elements/Post";

import "./renderPosts.css";

const renderPosts = async () => {
  const postsBlock = document.querySelector(".posts");

  postsBlock.innerHTML = "";

  const posts = await getPosts();

  const dataHtml = posts.map((post) => new Post(post));

  postsBlock.append(...dataHtml);
};

export default renderPosts;
