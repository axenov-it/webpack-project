import { getPosts } from "../requests";

import "./renderPosts.css";

const renderPosts = async () => {
  const container = document.querySelector("#app");

  const posts = await getPosts();

  const dataHtml = posts.map((post) => {
    const wrap = document.createElement("div");

    const html = `
                  <h2 class="post__title">${post.title}</h2>
                  <p class="post__description">${post.short_description}</p>
              `;

    wrap.className = "post";
    wrap.innerHTML = html;

    return wrap;
  });

  container.append(...dataHtml);
};

export default renderPosts;
