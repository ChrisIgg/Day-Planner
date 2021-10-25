var saveBtn = document.querySelector(".saveBtn");
var textArea = document.querySelector("textarea");
var now = moment();
// var displayText = displaymessage();

// var userContent = [];
document.getElementById("textarea").innerHTML =
  localStorage.getItem("textDisplayInfo");
// userContent.push(textAreaText);
// return getItem to display

timeDisplay = moment().format("HH:mm");

$("#currentDay").text(now.format("MMMM D YYYY"));

// textArea.addEventListener();

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var textDisplayInfo = textArea.value;
  console.log("text value", textDisplayInfo);

  localStorage.setItem("textDisplayInfo", textDisplayInfo);
  //   renderlastRegistered();
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
// clear text area on start of function
// once saved, recall from local storage and keep in textArea

// function displayMessage(type, message)
// function displayMessage(type, message) {
//     msgDiv.textContent = message;
//     msgDiv.setAttribute("class", type);
//   }

// go from saveBtn click starts process
// function looks at input info (if nothing there, return nothing)
// if something there save in local storage
// get'er from local storage (empty parentheticals and ""?)
// side panel area (?) with append with local storage content

// return HH:mm
// transfer to unix?
// // if unix is below unix of panel (panel must equal or < unix at last panel minute)
// Date.prototype.getHours()
// Returns the hour (0–23) in the specified date according to local time.

// rows have signifier of time (0-1) if .getHours is equal to signifier of panel, then make blue.  If < than signifier of .get hours, make grey. if <make green
