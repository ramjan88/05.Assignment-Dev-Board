//
// randomly background color change
function randomBackgroundColor() {
  let a = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  let c = Math.round(Math.random() * 256);

  let randomBgColor = "rgb(" + a + "," + b + "," + c + ")";
  document.body.style.background = randomBgColor;
}

//
//converted innerText value
function getInnerTextById(id) {
  let value = document.getElementById(id).innerText;
  let convertedValue = parseInt(value);
  return convertedValue;
}

//
//set value
function setInnerTextByIdandValue(id, value) {
  document.getElementById(id).innerText = value;
}

//show current date in website
function currentDate() {
  let updateDate = new Date();
  let options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  let formattedDate = updateDate.toLocaleDateString("en-US", options);
  formattedDate = formattedDate.replace("," , '');
  let parts = formattedDate.split(" ");
  let finalDate = `${parts[0]}, <span class="font-bold"> <br> ${parts[1]} ${parts[2]} ${parts[3]}</span>`;
  document.getElementById("curernt-date").innerHTML = finalDate;
}
currentDate()

