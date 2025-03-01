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

//show current date
let date =new Date()
document.getElementById("curernt-date").innerHTML=date.toDateString();

// card- 1
