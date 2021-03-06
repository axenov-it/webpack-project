import { addPost } from "../requests";
import Form from "../elements/Form";
import Post from "../elements/Post";

import "./renderForm.css";

const renderForm = async () => {
  const container = document.querySelector("body");
  const btnAdd = document.querySelector("#add-post");

  const addPostHandler = async ({ fields, onClose }) => {
    const result = await addPost(fields);

    const postsContainer = document.querySelector(".posts");

    postsContainer.prepend(new Post(result.post));

    postsContainer.lastChild.remove();

    onClose();
  };

  btnAdd.onclick = function () {
    container.appendChild(
      new Form({ title: "Create post", onSubmitHandler: addPostHandler })
    );
  };
};

export default renderForm;
