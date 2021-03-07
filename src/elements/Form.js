function Form(params) {
  const { title, onSubmitHandler } = params;

  const wrap = document.createElement("div");
  wrap.className = "form";

  const html = `<form class="form__container">
                    <span class="del">x</span>
                    <h3 class="form__header">${title}</h3>
                    <input name="title" class="form__item" type="text" placeholder="Enter post name" />
                    <textarea
                      name="description"
                      class="form__item"
                      placeholder="Enter post description"
                    ></textarea>
                    <button class="form__btn">Send data</button>
                  </form>                
                `;

  wrap.innerHTML = html;

  const onClose = () => wrap.remove();

  wrap.querySelector(".del").onclick = onClose;

  wrap.querySelector(".form__container").onsubmit = function (e) {
    e.preventDefault();

    const fields = {
      title: this.title.value,
      description: this.description.value,
    };

    onSubmitHandler({ fields, onClose });
  };

  return wrap;
}

export default Form;
