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
                <p>${e.description}</p>
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
  let session = document.querySelector(".session");
  let timerInterval = null;
  let isWorkSession = true;

  function updateTime() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    timer.innerHTML = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function startTimer() {
    if (isWorkSession) {
      totalSeconds = 25 * 60;
      timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTime();
        } else {
          clearInterval(timerInterval);
          isWorkSession = false;
          timer.innerHTML = "05:00";
          session.innerHTML = "Take a Break";
        }
      }, 1000);
    } else {
      totalSeconds = 5 * 60;
      timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTime();
        } else {
          clearInterval(timerInterval);
          isWorkSession = true;
          totalSeconds = 5 * 60;
          timer.innerHTML = "25:00";
          session.innerHTML = "Work Session";
        }
      }, 1000);
    }
  }
  startBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    startTimer();
  });

  pauseBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
  });
  resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    totalSeconds = 25 * 60;
    updateTime();
  });
}
pomodoroTimer();

function dailyGoal() {
  var currentGoals = [];

  if (localStorage.getItem("currentGoals")) {
    currentGoals = JSON.parse(localStorage.getItem("currentGoals"));
  } else {
    console.log("No Goals");
  }

  let form = document.querySelector(".daily-container .addGoal form");
  let goalInput = document.querySelector(".daily-container .addGoal form #goal-input");
  let goalDetailInput = document.querySelector(".daily-container .addGoal form textarea");
  let goalCheckbox = document.querySelector(".daily-container .addGoal form #check");

  let allGoals = document.querySelector(".allGoals");

  function renderGoal() {
    var sum = "";
    currentGoals.forEach(function (e, idx) {
      sum += `<div class="goal">
                <h5>${e.goal}</h5>
                <p>${e.description}</p>
                <button id=${idx}>Goal Completed</button>
                </div>`;
    });

    allGoals.innerHTML = sum;

    document.querySelectorAll(".goal button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentGoals.splice(btn.id, 1);
        localStorage.setItem("currentGoal", JSON.stringify(currentGoals));
        renderGoal();
      });
    });
  }

  renderGoal();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    currentGoals.push({
      goal: goalInput.value,
      description: goalDetailInput.value
    });
    renderGoal();
    localStorage.setItem("currentGoal", JSON.stringify(currentGoals));
    goalInput.value = "";
    goalDetailInput.value = "";
  });
}
dailyGoal()

const api_key = "441d6dc3e6851ad5b0bfd1f55afe7bfb";

function dashboard() {
  let data = null;
  async function weatherAPICall() {
    let raw = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=${api_key}`,
    );
    data = await raw.json();
    // console.log(data);
  }
  weatherAPICall();

  let daytime = document.querySelector(".header1 h1");
  let daySeconds = document.querySelector(".dayntime h4");
  let dayrotation = document.querySelector(".dayntime span");
  let dateToday = document.querySelector(".header1 h2");
  let temp = document.querySelector(".header2 h3");
  let weatherDetails = document.querySelectorAll(".header2 h4");

  function timeDate() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date();
    const Hours = today.getHours();
    const Minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const dayName = daysOfWeek[today.getDay()];
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    dateToday.innerHTML = `${String(date).padStart(2, "0")} ${months[month]}, ${String(year).padStart(2, "0")}`;
    daySeconds.innerHTML = `${String(seconds).padStart(2, "0")}`;
    temp.innerHTML = `${(data.main.temp - 273.15).toFixed(1)}°C`;
    weatherDetails[0].innerHTML = `Humidity: ${data.main.humidity}%`;
    weatherDetails[1].innerHTML = `Wind: ${data.wind.speed} km/h`;
    weatherDetails[2].innerHTML = `${data.weather[0].main}`;

    if (Hours > 12) {
      daytime.innerHTML = `${dayName} , ${String(Hours - 12).padStart(2, "0")}:${String(Minutes).padStart(2, "0")} `;
      dayrotation.innerHTML = "pm";
    } else {
      daytime.innerHTML = `${dayName} , ${String(Hours).padStart(2, "0")}:${String(Minutes).padStart(2, "0")} `;
      dayrotation.innerHTML = "am";
    }
  }
  setInterval(() => {
    timeDate();
  }, 500);
}
dashboard();

function themeChanger() {
  const themeCheckbox = document.querySelector(".theme-checkbox");
  const images = document.querySelectorAll(".elem img");
  const header = document.querySelector(".allElems header");

  themeCheckbox.addEventListener("change", function () {
    if (this.checked) {
      // BLUE THEME
      console.log("Switched to BLUE theme");

      // Change image colors
      images.forEach((img) => {
        img.style.filter = "hue-rotate(190deg) saturate(1.2)";
      });

      // Change header background color using filter
      header.style.filter = "hue-rotate(190deg) saturate(1.2)";

      // Change CSS variables
      document.documentElement.style.setProperty("--pri", "rgb(60, 165, 192)");
      document.documentElement.style.setProperty("--sec", "#7ff0ff");
      document.documentElement.style.setProperty(
        "--lengra",
        `linear-gradient(
    to right,
    rgb(4, 38, 39),
    rgb(19, 143, 188),
    rgb(4, 38, 39))`,
      );
    } else {
      // RED THEME (default)
      console.log("Switched to RED theme");

      // Reset images
      images.forEach((img) => {
        img.style.filter = "none";
      });

      // Reset header
      header.style.filter = "none";

      // Reset CSS variables to original
      document.documentElement.style.setProperty("--pri", "rgb(188, 19, 19)");
      document.documentElement.style.setProperty("--sec", "#b53a05");
      document.documentElement.style.setProperty(
        "--lengra",
        `linear-gradient(
    to right,
    rgb(39, 4, 4),
    rgb(188, 19, 19),
    rgb(39, 4, 4))`,
      );
    }
  });

}
themeChanger();
