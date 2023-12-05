const handleSubmit = function (e) {
  e.preventDefault();
  addTask();
  taskComplete();
  deleteTask();
  alert();
};

const addTask = function () {
  let task = document.querySelector("#tasks");
  let input = document.querySelector("input");
  let newTask = ` <div class="task">
    <span id="taskname">
        ${input.value}
    </span>
    <button class="delete">
        <i class="far fa-trash-alt"></i>
    </button>
</div>`;

  task.innerHTML += newTask;
  input.value = "";
};

const taskComplete = function () {
  let tasks = document.querySelectorAll("#taskname");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener("click", function () {
      this.classList.toggle("completed");
    });
  }
};

const deleteTask = function () {
  let button = document.querySelectorAll(".delete");
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
};

window.onload = function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
};
