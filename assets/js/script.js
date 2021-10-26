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

  var textDisplayInfo2 = textarea2.value;
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

// break

var saveBtn3 = document.querySelector(".saveBtn3");
var textArea3 = document.querySelector("textarea3");

document.getElementById("textarea3").innerHTML =
  localStorage.getItem("textDisplayInfo3");

saveBtn3.addEventListener("click", function (event) {
  event.preventDefault();

  var textDisplayInfo3 = textarea3.value;
  console.log("text value", textDisplayInfo3);

  localStorage.setItem("textDisplayInfo3", textDisplayInfo3);
  console.log(localStorage);
});

function init3() {
  renderTextDisplay3();
}

function renderTextDisplay3() {
  var savedDisplay3 = localStorage.getItem("textDisplayInfo3");

  if (savedDisplay3 !== null) {
    userContent3 = savedDisplay3;
    console.log("user content info3", userContent3);
  } else {
    return;
  }
}

init3();

// break

var saveBtn4 = document.querySelector(".saveBtn4");
var textArea4 = document.querySelector("textarea4");

document.getElementById("textarea4").innerHTML =
  localStorage.getItem("textDisplayInfo4");

saveBtn4.addEventListener("click", function (event) {
  event.preventDefault();

  var textDisplayInfo4 = textarea4.value;
  console.log("text value", textDisplayInfo4);

  localStorage.setItem("textDisplayInfo4", textDisplayInfo4);
  console.log(localStorage);
});

function init4() {
  renderTextDisplay4();
}

function renderTextDisplay4() {
  var savedDisplay4 = localStorage.getItem("textDisplayInfo4");

  if (savedDisplay4 !== null) {
    userContent4 = savedDisplay4;
    console.log("user content info4", userContent4);
  } else {
    return;
  }
}

init4();

// break

var saveBtn5 = document.querySelector(".saveBtn5");
var textArea5 = document.querySelector("textarea5");

document.getElementById("textarea5").innerHTML =
  localStorage.getItem("textDisplayInfo5");

saveBtn5.addEventListener("click", function (event) {
  event.preventDefault();

  var textDisplayInfo5 = textarea5.value;
  console.log("text value", textDisplayInfo5);

  localStorage.setItem("textDisplayInfo5", textDisplayInfo5);
  console.log(localStorage);
});

function init5() {
  renderTextDisplay5();
}

function renderTextDisplay5() {
  var savedDisplay5 = localStorage.getItem("textDisplayInfo5");

  if (savedDisplay5 !== null) {
    userContent5 = savedDisplay5;
    console.log("user content info5", userContent5);
  } else {
    return;
  }
}

init5();

// break

var saveBtn6 = document.querySelector(".saveBtn6");
var textArea6 = document.querySelector("textarea6");

document.getElementById("textarea6").innerHTML =
  localStorage.getItem("textDisplayInfo6");

saveBtn6.addEventListener("click", function (event) {
  event.preventDefault();

  var textDisplayInfo6 = textarea6.value;
  console.log("text value", textDisplayInfo6);

  localStorage.setItem("textDisplayInfo6", textDisplayInfo6);
  console.log(localStorage);
});

function init6() {
  renderTextDisplay6();
}

function renderTextDisplay6() {
  var savedDisplay6 = localStorage.getItem("textDisplayInfo6");

  if (savedDisplay6 !== null) {
    userContent6 = savedDisplay6;
    console.log("user content info6", userContent6);
  } else {
    return;
  }
}

init6();

// break

var saveBtn7 = document.querySelector(".saveBtn7");
var textArea7 = document.querySelector("textarea7");

document.getElementById("textarea7").innerHTML =
  localStorage.getItem("textDisplayInfo7");

saveBtn7.addEventListener("click", function (event) {
  event.preventDefault();

  var textDisplayInfo7 = textarea7.value;
  console.log("text value", textDisplayInfo7);

  localStorage.setItem("textDisplayInfo7", textDisplayInfo7);
  console.log(localStorage);
});

function init7() {
  renderTextDisplay7();
}

function renderTextDisplay7() {
  var savedDisplay7 = localStorage.getItem("textDisplayInfo7");

  if (savedDisplay7 !== null) {
    userContent7 = savedDisplay7;
    console.log("user content info7", userContent7);
  } else {
    return;
  }
}

init7();

// break

var saveBtn8 = document.querySelector(".saveBtn8");
var textArea8 = document.querySelector("textarea8");

document.getElementById("textarea8").innerHTML =
  localStorage.getItem("textDisplayInfo8");

saveBtn8.addEventListener("click", function (event) {
  event.preventDefault();

  var textDisplayInfo8 = textarea8.value;
  console.log("text value", textDisplayInfo8);

  localStorage.setItem("textDisplayInfo8", textDisplayInfo8);
  console.log(localStorage);
});

function init8() {
  renderTextDisplay8();
}

function renderTextDisplay8() {
  var savedDisplay8 = localStorage.getItem("textDisplayInfo8");

  if (savedDisplay8 !== null) {
    userContent8 = savedDisplay8;
    console.log("user content info8", userContent8);
  } else {
    return;
  }
}

init8();

// break

var saveBtn9 = document.querySelector(".saveBtn9");
var textArea9 = document.querySelector("textarea9");

document.getElementById("textarea9").innerHTML =
  localStorage.getItem("textDisplayInfo9");

saveBtn9.addEventListener("click", function (event) {
  event.preventDefault();

  var textDisplayInfo9 = textarea9.value;
  console.log("text value", textDisplayInfo9);

  localStorage.setItem("textDisplayInfo9", textDisplayInfo9);
  console.log(localStorage);
});

function init9() {
  renderTextDisplay9();
}

function renderTextDisplay9() {
  var savedDisplay9 = localStorage.getItem("textDisplayInfo9");

  if (savedDisplay9 !== null) {
    userContent9 = savedDisplay9;
    console.log("user content info9", userContent9);
  } else {
    return;
  }
}

init9();
