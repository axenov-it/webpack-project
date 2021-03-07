import { removePost, updatePost } from "../requests";
import renderPosts from "../components/renderPosts";
import Form from "../elements/Form";

function Post(params) {
  const { id, title, short_description } = params;

  const wrap = document.createElement("div");

  const onDeletePost = async () => {
    const response = await removePost(id);

    if (response.result) {
      await renderPosts();
    }
  };

  const onUpdatePost = async ({ fields, onClose }) => {
    const response = await updatePost({
      id,
      title: fields.title,
      description: fields.description,
    });

    const { title, short_description } = response.post;

    wrap.querySelector(".posts__title").innerHTML = title;
    wrap.querySelector(".posts__description").innerHTML = short_description;

    onClose();
  };

  const onShowFormUpdate = () => {
    const container = document.querySelector("body");

    container.appendChild(
      new Form({
        title: "Update post",
        onSubmitHandler: onUpdatePost,
        post: { title, description: short_description },
      })
    );
  };

  const html = `
                  <span class="posts__update">u</span>
                  <span class="del">X</span>
                  <h2 class="posts__title">${title}</h2>
                  <p class="posts__description">${short_description}</p>
              `;

  wrap.className = "posts__post";
  wrap.innerHTML = html;

  wrap.querySelector(".del").onclick = onDeletePost;
  wrap.querySelector(".posts__update").onclick = onShowFormUpdate;

  return wrap;
}

export default Post;
