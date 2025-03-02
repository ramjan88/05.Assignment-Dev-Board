//
// change random body color change
document.getElementById("theme-btn").addEventListener("click", function () {
  randomBackgroundColor();
});
//
// click and visite the blog site
document.getElementById("discoverd-box").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// card- 1
document
  .getElementById("btn-mobile")
  .addEventListener("click", function (event) {
    alert("Board Update successfully");

    let taskNumber = getInnerTextById("task-number");
    let mainNumber = getInnerTextById("main-number");

    let diff = taskNumber - 1;
    setInnerTextByIdandValue("task-number", diff);
    let sum = mainNumber + 1;
    setInnerTextByIdandValue("main-number", sum);

    //create history content
    let historyContainer = document.getElementById("history-container");
    let mobileTitle = document.getElementById("mobile-title").innerText;
    let curerntDate = new Date().toLocaleTimeString();

    let div = document.createElement("div");
    div.classList.add("bg-[#F4F7FF]", "mt-5", "rounded-xl");
    let p = document.createElement("p");
    p.classList.add("text-sm", "px-4", "pb-4");
    p.innerText = `
    You have completed the task  ${mobileTitle} at ${curerntDate}
    `;
    div.appendChild(p);
    historyContainer.appendChild(div);

    //chack tast number 0
    if (diff === 0) {
      alert("congrates!!! You have completed all the current task");
    }

    // disabled button
    event.target.setAttribute("disabled", true);
  });

// card- 2
document.getElementById("btn-dark").addEventListener("click", function (event) {
  alert("Board Update successfully");

  let taskNumber = getInnerTextById("task-number");
  let mainNumber = getInnerTextById("main-number");

  let diff = taskNumber - 1;
  setInnerTextByIdandValue("task-number", diff);
  let sum = mainNumber + 1;
  setInnerTextByIdandValue("main-number", sum);

  //create history content
  let historyContainer = document.getElementById("history-container");
  let mobileTitle = document.getElementById("dark-title").innerText;
  let curerntDate = new Date().toLocaleTimeString();

  let div = document.createElement("div");
  div.classList.add("bg-[#F4F7FF]", "mt-5", "rounded-xl");
  let p = document.createElement("p");
  p.classList.add("text-sm", "px-4", "pb-4");
  p.innerText = `
    You have completed the task  ${mobileTitle} at ${curerntDate}
    `;
  div.appendChild(p);
  historyContainer.appendChild(div);

  //chack tast number 0
  if (diff === 0) {
    alert("congrates!!! You have completed all the current task");
  }

  // disabled button
  event.target.setAttribute("disabled", true);
});

// card- 3
document
  .getElementById("btn-optimize")
  .addEventListener("click", function (event) {
    alert("Board Update successfully");

    let taskNumber = getInnerTextById("task-number");
    let mainNumber = getInnerTextById("main-number");

    let diff = taskNumber - 1;
    setInnerTextByIdandValue("task-number", diff);
    let sum = mainNumber + 1;
    setInnerTextByIdandValue("main-number", sum);

    //create history content
    let historyContainer = document.getElementById("history-container");
    let mobileTitle = document.getElementById("optimize-title").innerText;
    let curerntDate = new Date().toLocaleTimeString();

    let div = document.createElement("div");
    div.classList.add("bg-[#F4F7FF]", "mt-5", "rounded-xl");
    let p = document.createElement("p");
    p.classList.add("text-sm", "px-4", "pb-4");
    p.innerText = `
    You have completed the task  ${mobileTitle} at ${curerntDate}
    `;
    div.appendChild(p);
    historyContainer.appendChild(div);

    //chack tast number 0
    if (diff === 0) {
      alert("congrates!!! You have completed all the current task");
    }

    // disabled button
    event.target.setAttribute("disabled", true);
  });

// card- 4
document
  .getElementById("btn-emoji")
  .addEventListener("click", function (event) {
    alert("Board Update successfully");

    let taskNumber = getInnerTextById("task-number");
    let mainNumber = getInnerTextById("main-number");

    let diff = taskNumber - 1;
    setInnerTextByIdandValue("task-number", diff);
    let sum = mainNumber + 1;
    setInnerTextByIdandValue("main-number", sum);

    //create history content
    let historyContainer = document.getElementById("history-container");
    let mobileTitle = document.getElementById("emoji-title").innerText;
    let curerntDate = new Date().toLocaleTimeString();

    let div = document.createElement("div");
    div.classList.add("bg-[#F4F7FF]", "mt-5", "rounded-xl");
    let p = document.createElement("p");
    p.classList.add("text-sm", "px-4", "pb-4");
    p.innerText = `
    You have completed the task  ${mobileTitle} at ${curerntDate}
    `;
    div.appendChild(p);
    historyContainer.appendChild(div);

    //chack tast number 0
    if (diff === 0) {
      alert("congrates!!! You have completed all the current task");
    }

    // disabled button
    event.target.setAttribute("disabled", true);
  });

// card- 5
document.getElementById("btn-api").addEventListener("click", function (event) {
  alert("Board Update successfully");

  let taskNumber = getInnerTextById("task-number");
  let mainNumber = getInnerTextById("main-number");

  let diff = taskNumber - 1;
  setInnerTextByIdandValue("task-number", diff);
  let sum = mainNumber + 1;
  setInnerTextByIdandValue("main-number", sum);

  //create history content
  let historyContainer = document.getElementById("history-container");
  let mobileTitle = document.getElementById("api-title").innerText;
  let curerntDate = new Date().toLocaleTimeString();

  let div = document.createElement("div");
  div.classList.add("bg-[#F4F7FF]", "mt-5", "rounded-xl");
  let p = document.createElement("p");
  p.classList.add("text-sm", "px-4", "pb-4");
  p.innerText = `
    You have completed the task  ${mobileTitle} at ${curerntDate}
    `;
  div.appendChild(p);
  historyContainer.appendChild(div);

  //chack tast number 0
  if (diff === 0) {
    alert("congrates!!! You have completed all the current task");
  }

  // disabled button
  event.target.setAttribute("disabled", true);
});

// card- 6
document.getElementById("btn-job").addEventListener("click", function (event) {
  alert("Board Update successfully");

  let taskNumber = getInnerTextById("task-number");
  let mainNumber = getInnerTextById("main-number");

  let diff = taskNumber - 1;
  setInnerTextByIdandValue("task-number", diff);
  let sum = mainNumber + 1;
  setInnerTextByIdandValue("main-number", sum);

  //create history content
  let historyContainer = document.getElementById("history-container");
  let mobileTitle = document.getElementById("job-title").innerText;
  let curerntDate = new Date().toLocaleTimeString();

  let div = document.createElement("div");
  div.classList.add("bg-[#F4F7FF]", "mt-5", "rounded-xl");
  let p = document.createElement("p");
  p.classList.add("text-sm", "px-4", "pb-4");
  p.innerText = `
    You have completed the task  ${mobileTitle} at ${curerntDate}
    `;
  div.appendChild(p);
  historyContainer.appendChild(div);

  //chack tast number 0
  if (diff === 0) {
    alert("congrates!!! You have completed all the current task");
  }

  // disabled button
  event.target.setAttribute("disabled", true);
});

//
// clear the history content
document
  .getElementById("btn-clear-history")
  .addEventListener("click", function () {
    let clear = document.getElementById("history-container");
    clear.innerText = "";
  });
