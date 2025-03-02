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
