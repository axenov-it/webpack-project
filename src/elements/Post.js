function Post(prams) {
  const { title, short_description } = prams;

  const wrap = document.createElement("div");

  const html = `
                  <span class="del">X</span>
                  <h2 class="posts__title">${title}</h2>
                  <p class="posts__description">${short_description}</p>
              `;

  wrap.className = "posts__post";
  wrap.innerHTML = html;

  return wrap;
}

export default Post;
