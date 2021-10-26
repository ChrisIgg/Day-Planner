var saveBtn = document.querySelector(".saveBtn");
var textArea = document.querySelector("textarea");
var now = moment();
var timeDisplay = (document.getElementById("textarea").innerHTML =
  localStorage.getItem("textDisplayInfo"));

timeDisplay = moment().format("HH:mm");

$("#currentDay").text(now.format("MMMM D YYYY"));

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var textDisplayInfo = textArea.value;
  console.log("text value", textDisplayInfo);

  localStorage.setItem("textDisplayInfo", textDisplayInfo);
  console.log(localStorage);
});

function init() {
  renderTextDisplay();
}
function renderTextDisplay() {
  var savedDisplay = localStorage.getItem("textDisplayInfo");

  if (savedDisplay !== null) {
    userContent = savedDisplay;
    console.log("user content info", userContent);
  } else {
    return;
  }
}
init();

var saveBtn2 = document.querySelector(".saveBtn2");
var textArea2 = document.querySelector("textarea2");
var now = moment();
// var displayText = displaymessage();

// var userContent = [];
document.getElementById("textarea2").innerHTML =
  localStorage.getItem("textDisplayInfo2");

saveBtn2.addEventListener("click", function (event) {
  event.preventDefault();

  var textDisplayInfo2 = textArea2.value;
  console.log("text value", textDisplayInfo2);

  localStorage.setItem("textDisplayInfo2", textDisplayInfo2);
  console.log(localStorage);
});

function init2() {
  renderTextDisplay2();
}

function renderTextDisplay2() {
  var savedDisplay2 = localStorage.getItem("textDisplayInfo2");

  if (savedDisplay2 !== null) {
    userContent2 = savedDisplay2;
    console.log("user content info2", userContent2);
  } else {
    return;
  }
}

init2();
