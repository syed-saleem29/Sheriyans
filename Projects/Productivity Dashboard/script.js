function openFeatures() {
  let allElem = document.querySelectorAll(".elem");
  let mainPages = document.querySelectorAll(".fullElem");
  let mainPagesBackBtn = document.querySelectorAll(".fullElem .back");

  // console.log(allElem)

  allElem.forEach(function (elem) {
    elem.addEventListener("click", function () {
      mainPages[elem.id].style.display = "block";
      setTimeout(() => {
        mainPages[elem.id].style.transform = "translateX(0)";
      }, 10);
    });
  });

  mainPagesBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      mainPages[back.id].style.transform = "translateX(100%)";
      setTimeout(() => {
        mainPages[back.id].style.display = "none";
      }, 300);
    });
  });
}

openFeatures();

function todoList() {
  var currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task list is empty");
  }

  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form #task-input");
  let taskDetailInput = document.querySelector(".addTask form textarea");
  let taskCheckbox = document.querySelector(".addTask form #check");

  let allTask = document.querySelector(".allTask");

  function renderTask() {
    var sum = "";
    currentTask.forEach(function (e, idx) {
      sum += `<div class="task">
                <h5>${e.task} <span class=${e.imp}>Imp</span></h5>
                <button id=${idx}>Mark as Done</button>
                </div>`;
    });

    allTask.innerHTML = sum;

    document.querySelectorAll(".task button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);
        localStorage.setItem("currentTask", JSON.stringify(currentTask));
        renderTask();
      });
    });
  }

  renderTask();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    currentTask.push({
      task: taskInput.value,
      description: taskDetailInput.value,
      imp: taskCheckbox.checked,
    });
    renderTask();
    localStorage.setItem("currentTask", JSON.stringify(currentTask));
    taskInput.value = "";
    taskDetailInput.value = "";
    taskCheckbox.checked = false;
  });
}

todoList();

function dayPlanner() {
  let dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};

  let dayPlanner = document.querySelector(".day-planner");

  var hours = Array.from(
    { length: 18 },
    (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`,
  );

  let wholedaysum = "";

  hours.forEach(function (elem, idx) {
    let savedData = dayPlanData[idx] || "";
    wholedaysum += `<div class="day-planner-time">
    <p>${elem}</p>
    <input id=${idx}  type="text" placeholder="..." value=${savedData}>
    </div>`;
  });

  dayPlanner.innerHTML = wholedaysum;
  let dayPlannerInput = document.querySelectorAll(".day-planner input");

  // console.log(dayPlannerInput);

  dayPlannerInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      dayPlanData[elem.id] = elem.value;

      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
    });
  });
  // localStorage.clear()
}
dayPlanner();

function dailyQuote() {
  motivationQuote = document.querySelector(".motivation-2 h1");
  motivationAuthor = document.querySelector(".motivation-3 h2");

  async function fetchQuote() {
    let response = await (await fetch("https://api.quotable.io/random")).json();
    motivationQuote.innerHTML = '"' + response.content + '"';
    motivationAuthor.innerHTML = "- " + response.author;
  }
  fetchQuote();
}

dailyQuote();

function pomodoroTimer() {
  let totalSeconds = 25 * 60;
  let timer = document.querySelector(".pomo-timer h1");
  let startBtn = document.querySelector(".pomo-timer .start-timer");
  let pauseBtn = document.querySelector(".pomo-timer .pause-timer");
  let resetBtn = document.querySelector(".pomo-timer .reset-timer");
  let session = document.querySelector(".session")
  let timerInterval = null
  let isWorkSession = true

  function updateTime() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    timer.innerHTML = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
  }

  function startTimer() {
    if(isWorkSession){
      totalSeconds = 25*60
      timerInterval = setInterval(() => {
      if(totalSeconds > 0){
      totalSeconds--;
      updateTime();
      }else{
        clearInterval(timerInterval)
        isWorkSession = false
        timer.innerHTML = "05:00"
        session.innerHTML = "Take a Break"
        
      }
    }, 1000);
  }
  else{
    totalSeconds = 5*60
    timerInterval = setInterval(() => {
      if(totalSeconds > 0){
        totalSeconds--;
        updateTime();
      }else{
        clearInterval(timerInterval)
        isWorkSession = true
        totalSeconds = 5*60
        timer.innerHTML = "25:00"
        session.innerHTML = "Work Session"
      }
    }, 1000);
  }
  
  
}
  startBtn.addEventListener('click',()=>{
    clearInterval(timerInterval)
    startTimer()
  })

  pauseBtn.addEventListener('click',()=>{
    clearInterval(timerInterval)
  })
  resetBtn.addEventListener('click',()=>{
    clearInterval(timerInterval)
    totalSeconds = 25*60
    updateTime()
  })

}

pomodoroTimer();
