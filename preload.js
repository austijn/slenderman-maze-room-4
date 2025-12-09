console.log("Preload running...");

var loadingScreen = document.getElementById("load");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var next = document.getElementById("next");
var canClick2 = false;

var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

function buttonClick() {
  if (canClick2 == true) {
    if (h1.textContent == "LOADING...") {
      canClick2 = false;
      next.classList.remove("visible");
      next.classList.add("invisible");
      loadingScreen.classList.add("invisible");
      setTimeout(function () {
        next.remove();
        loadingScreen.remove();
        document.getElementById("wind").volume = 0.5;
        document.getElementById("amb").volume = 0.5;
        document.getElementById("wind").loop = true;
        document.getElementById("amb").loop = true;
        document.getElementById("wind").play();
        document.getElementById("amb").play();
        setInterval(drainBattery, 5000);
        setInterval(checkSlender, 500);
        setInterval(countdown, 10);
      }, 500);
    }
  }
}

preload(
  "images/flashlight.png",
  "images/hall.png",
  "images/static.gif",
  "images/vignette.png",
  "images/leftarrow.png",
  "images/rightarrow.png",
  "images/downarrow.png",
  "images/slenderman.png",
  "images/copper.png",
  "images/breakerWall.png",
  "images/cheatsheet.png",
  "images/onButton.png",
  "images/offButton.png",
  "images/battery.png",
  "images/DialogueBox.png",
  "images/sign.png",
  "images/symbols/circle.png",
  "images/symbols/square.png",
  "images/symbols/triangle.png",
  "images/symbols/pentagon.png",
  "images/symbols/diamond.png",
  "images/symbols/trapezoid.png",
  "images/symbols/star.png",
  "images/symbols/heart.png",
  "images/copper/copper1.png",
  "images/copper/copper2.png",
  "images/copper/copper3.png",
  "images/downarrowRed.png",
  "images/leftarrowRed.png",
  "images/rightarrowRed.png",
  "sounds/draw_shovel_soldier.wav",
  "sounds/Button click sound  sound effect.mp3",
  "sounds/Half-Life - Button Sound.mp3",
  "sounds/LivingInTheSunlight.mp3",
  "sounds/mvm_siren.mp3",
  "sounds/slenderman sound effect.mp3",
  "sounds/desert_wind.wav",
  "sounds/underground.wav",
  "images/redVingette.png",
  "sounds/weapon_crit_charged_off.wav",
  "sounds/slendermanDeath.wav",
  "images/slendermanJumpscare.gif",
  "sounds/Baldi smacking ruler.mp3",
  "images/baldiJump.png",
  "images/endingWall.png",
  "images/endingWall2.png",
  "sounds/doorOpen.mp3"
);

setTimeout(function () {
  next.classList.add("visible");
  setTimeout(function () {
    next.classList.remove("invisible");
    setTimeout(function () {
      next.classList.add("text");
      canClick2 = true;
    }, 500);
  }, 500);
}, 1000);


