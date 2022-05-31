// Мастерская переключатель тегов вариант 1-й
// const tagsContainer = document.querySelector(".js-tags");
// let selectorTag = null;

// tagsContainer.addEventListener("click", onClick);

// function onClick(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const currentActiveBtn = document.querySelector(".tags__btn-active");

//   //   if (currentActiveBtn) {
//   //     currentActiveBtn.classList.remove('tags__btn-active');
//   //   }
//   //   Вопросительный знак заменяет if

//   currentActiveBtn?.classList.remove("tags__btn-active");

//   const nextActiveBtn = event.target;
//   nextActiveBtn.classList.add("tags__btn-active");
//   selectorTag = nextActiveBtn.dataset.value;
//   console.log(selectorTag);
// }
// Вариант 2-й можно добавлять и убирать отметки тэгов
const tagsContainer = document.querySelector(".js-tags");
const selectTags = new Set();
tagsContainer.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const btn = event.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains("tags__btn-active");

  if (isActive) {
    selectTags.delete(tag);
  } else {
    selectTags.add(tag);
  }

  btn.classList.toggle("tags__btn-active");

  console.log(selectTags);
}
