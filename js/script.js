// Мастерская теги
const tagsContainer = document.querySelector(".js-tags");
let selectorTag = null;

tagsContainer.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const currentActiveBtn = document.querySelector(".tags__btn-active");

  //   if (currentActiveBtn) {
  //     currentActiveBtn.classList.remove('tags__btn-active');
  //   }
  //   Вопросительный знак заменяет if

  currentActiveBtn?.classList.remove("tags__btn-active");

  const nextActiveBtn = event.target;
  nextActiveBtn.classList.add("tags__btn-active");
  selectorTag = nextActiveBtn.dataset.value;
  console.log(selectorTag);
}
