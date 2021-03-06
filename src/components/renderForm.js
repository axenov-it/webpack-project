//import Post from "../elements/Post";

import "./renderForm.css";

const renderForm = async () => {
  const container = document.querySelector("body");
  const btnAdd = document.querySelector("#add-post");

  btnAdd.onclick = function () {
    console.log("helloo render form");
  };

  //   const postsBlock = document.createElement("div");
  //   postsBlock.className = "posts";

  //   const posts = await getPosts();

  //   const dataHtml = posts.map((post) => new Post(post));

  //   postsBlock.append(...dataHtml);
  //   container.appendChild(postsBlock);
};

export default renderForm;
