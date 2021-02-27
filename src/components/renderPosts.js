import { getPosts } from "../requests";

import "./renderPosts.css";

const renderPosts = async () => {
  const container = document.querySelector("#app");
  const postsBlock = document.createElement("div");
  postsBlock.className = "posts";

  const posts = await getPosts();

  const dataHtml = posts.map((post) => {
    const wrap = document.createElement("div");

    const html = `
                  <h2 class="posts__title">${post.title}</h2>
                  <p class="posts__description">${post.short_description}</p>
              `;

    wrap.className = "posts__post";
    wrap.innerHTML = html;

    return wrap;
  });

  postsBlock.append(...dataHtml);
  container.appendChild(postsBlock);
};

export default renderPosts;
