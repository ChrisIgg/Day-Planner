var saveBtn = document.querySelector("saveBtn");
var textArea = document.querySelector("textarea");
var now = moment();

timeDisplay = moment().format("HH:mm");

$("#currentDay").text(now.format("MMMM D YYYY"));
