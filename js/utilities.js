//
// randomly background color change
function randomBackgroundColor() {
  let a = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  let c = Math.round(Math.random() * 256);

  let randomBgColor = "rgb(" + a + "," + b + "," + c + ")";
  document.body.style.background = randomBgColor;
}
