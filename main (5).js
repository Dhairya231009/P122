x = 0;
y = 0;
var screen_width = 0;
var screen_height = 0;
var apple = empty;
var to_number = empty;

function preload() {
  loadimage = "apple.png";
  createCanvas()
  screen_height = 150;
  screen_width = 150;
  canvas.position(0 - 150)
}
draw_apple = "";
to_number = Number(content);
if (Number.isInteger(to_number))
  screen_height = window.innerHeight;
screen_width = window.innerWidth;
for (var i = 1; i <= to_number; i++) {
  x = Math.floor(Math.random() * 700);
  y = Math.floor(Math.random() * 400);
  image(apple, x, y, 50, 50)
}
document.getElementById("status").innerHTML=to_number+"Apple Drawn";
function speak(){}
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}

recognition.onresult = function (event) {

  console.log(event);

  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;

}

function setup() {

}

function draw() {
  if (draw_apple == "set") {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak() {
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}