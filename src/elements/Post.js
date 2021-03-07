import { removePost } from "../requests";
import renderPosts from "../components/renderPosts";

function Post(params) {
  const { id, title, short_description } = params;

  const onDeletePost = async () => {
    const response = await removePost(id);

    if (response.result) {
      await renderPosts();
    }
  };

  const wrap = document.createElement("div");

  const html = `
                  <span class="del">X</span>
                  <h2 class="posts__title">${title}</h2>
                  <p class="posts__description">${short_description}</p>
              `;

  wrap.className = "posts__post";
  wrap.innerHTML = html;

  wrap.querySelector(".del").onclick = onDeletePost;

  return wrap;
}

export default Post;
