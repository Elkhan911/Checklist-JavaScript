const input = document.querySelector("#_input");
const checkList = document.querySelector("#_checkList");

// функция для удаления задачи
function deleteTask() {
  let deleteAll = document.querySelectorAll(".delete");
  for (let deleteTask of deleteAll) {
    deleteTask.addEventListener("click", function () {
      deleteTask.closest("li").remove();
    });
  }
}

deleteTask();

// функция для зачеркивания задачи
function checkTask() {
  let checkAll = document.querySelectorAll(".check");
  for (let checkTask of checkAll) {
    checkTask.addEventListener("click", function () {
      checkTask
        .closest("li")
        .querySelector(".checkList__text")
        .classList.toggle("checked");
    });
  }
}

checkTask();

// функция для редактирования задачи
function editTask() {
  let editBtns = document.querySelectorAll(".checkList__image");

  for (let editBtn of editBtns) {
    editBtn.addEventListener("click", editionTask);

    function editionTask() {
      let input = document.createElement("input");
      input.classList.add("input__edition");
      editBtn.closest("li").prepend(input);

      input.addEventListener(
        "keydown",
        function (event) {
          input.nextElementSibling.textContent = input.value;
          if (event.key == "Enter") {
            input.remove();
            editBtn.addEventListener("click", editionTask);
          }
        },
        editBtn.removeEventListener("click", editionTask)
      );
    }
  }
}

editTask();

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let li = document.createElement("li");
    li.classList.add("checkList__item");
    checkList.append(li);

    let span = document.createElement("span");
    span.textContent = input.value;
    span.classList.add("checkList__text");
    li.append(span);

    let img = document.createElement("img");
    img.classList.add("checkList__image");
    img.src = "images/editBtn.png";
    img.alt = "эмблема редактирования";
    li.append(img);

    let div = document.createElement("div");
    div.classList.add("checkList__options");
    li.append(div);

    let span1 = document.createElement("span");
    span1.textContent = "удалить";
    span1.classList.add("checkList__option");
    span1.classList.add("delete");

    let span2 = document.createElement("span");
    span2.textContent = "выполнено";
    span2.classList.add("checkList__option");
    span2.classList.add("check");
    div.append(span1, span2);

    input.value = "";

    deleteTask();
    checkTask();
    editTask();
  }
});
