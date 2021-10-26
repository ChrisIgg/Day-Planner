var saveBtn = document.querySelector(".saveBtn");
var textArea = document.querySelector("textarea");
var now = moment();
var timeDisplay = 

document.getElementById("textarea").innerHTML =
  localStorage.getItem("textDisplayInfo");

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

// var saveBtn = document.querySelector(".saveBtn");
// var textArea = document.querySelector("textarea");
// document.getElementById("textarea").innerHTML =
//   localStorage.getItem("textDisplayInfo");
// saveBtn.addEventListener("click", function (event) {
//   event.preventDefault();

//   var textDisplayInfo = textArea.value;
//   console.log("text value", textDisplayInfo);

//   localStorage.setItem("textDisplayInfo", textDisplayInfo);
//   console.log(localStorage);
// });

// side panel area (?) with append with local storage content

// return HH:mm
// transfer to unix?
// // if unix is below unix of panel (panel must equal or < unix at last panel minute)
// Date.prototype.getHours()
// Returns the hour (0–23) in the specified date according to local time.

// rows have signifier of time (0-1) if .getHours is equal to signifier of panel, then make blue.  If < than signifier of .get hours, make grey. if <make green
