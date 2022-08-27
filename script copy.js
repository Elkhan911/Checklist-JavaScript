const input = document.querySelector("#_input");
const checkList = document.querySelector("#_checkList");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let li = document.createElement("li");
    li.textContent = input.value;
    li.classList.add("checkList__item");
    checkList.append(li);

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
  }
});

function deleteTask() {
  let deleteAll = document.querySelectorAll(".delete");
  console.log(deleteAll);
  for (let deleteTask of deleteAll) {
    deleteTask.addEventListener("click", function () {
      deleteTask.closest("li").remove();
    });
  }
}

deleteTask();

function checkTask() {
  let checkAll = document.querySelectorAll(".check");
  console.log(checkAll);
  for (let checkTask of checkAll) {
    checkTask.addEventListener("click", function () {
      checkTask.closest("li").classList.add("checked");
    });
  }
}

checkTask();
