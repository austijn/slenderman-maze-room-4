var hand = document.getElementById("hand");
var black = document.getElementById("black");
var compass = document.getElementById("compass");
var slenderman = document.getElementById("slenderman");
var slenderImg = document.getElementById("slenderImg");
var static = document.getElementById("static");
var sign = document.getElementById("sign");
var hall = document.getElementById("background");
var bigGuy = document.getElementById("bigGuy");
var exit = document.getElementById("exit");
var hand = document.getElementById("hand");
var breaker = document.getElementById("breaker");
var redVingette = document.getElementById("redVingette");
var batteryNumber = document.getElementById("battery");
var difficultyText = document.getElementById("difficultyText");
var black2 = document.getElementById("black2");
var baldiJump = document.getElementById("baldiJump");
var battery = 100;
var seenSymbol = false;
var difficulty = 0;
var iambaldi = false;

var currentSymbolPosition = 0;

var singleSymbol = document.getElementById("singleSymbol");
var doubleSymbol = document.getElementById("doubleSymbol");

var smallSymbol = document.getElementById("smallSymbol");
var halfSymbol1 = document.getElementById("halfSymbol1");
var halfSymbol2 = document.getElementById("halfSymbol2");

function ending() {
  iambaldi = false;
  dead = true;
  exit.classList.add("endingExit");
  exit.classList.remove("left");
  bigGuy.classList.add("bruhhh");
  document.getElementById("equip").play();
  hand.classList.add("down");
  breaker.classList.add("bruhhh2");
  document.getElementById("leftarrow").remove();
  document.getElementById("rightarrow").remove();
  document.getElementById("downarrow").remove();
  compass.remove();
  document.getElementById("timerText").remove();
  document.getElementById("batteryBlock").remove();
  setTimeout(function () {
    document.getElementById("door").play();
    document.getElementById("doorimg").src = "images/endingWall2.png";
  }, 2000);
  setTimeout(function () {
    document.getElementById("doorimg").classList.add("hugeimg");
    window.location.href = "https://ihatethathedgehog3.github.io/EscapeRoom5/";
  }, 3000);
  setTimeout(function () {
    window.location.href = "https://ihatethathedgehog3.github.io/EscapeRoom5/";
  }, 4000);
}

var timer = 60;

function countdown() {
  if (iambaldi) {
    timer = Math.round(timer * 100 - 1) / 100;
    document.getElementById("timerText").textContent = String(timer);
    if (timer <= 0) {
      iambaldi = false;
      baldiJump.style.display = "flex";
      document.getElementById("baldiSound").play();
      setTimeout(function () {
        location.reload(true);
      }, 1000);
    }
  }
}

var symbols = [
  "circle",
  "square",
  "triangle",
  "diamond",
  "pentagon",
  "trapezoid",
  "star",
  "heart",
  ["circle", "heart"],
  ["diamond", "trapezoid"],
  ["triangle", "heart"],
  ["pentagon", "star"],
  ["trapezoid", "star"],
  ["trapezoid", "heart"],
  ["star", "heart"],
  ["heart", "heart"],
];
var randomCode = [];
var currentCodePosition = 1;

var dialogueModal = document.getElementById("dialogueModal");
var dialogueText = document.getElementById("dialogueText");
var dialogueImg = document.getElementById("dialogueImg");

var canClick = true;
var dead = false;
var currentRoom = "Forward";
var signPosition = 0;
var slendermanPosition = 0;

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;

const ON = "https://austijn.github.io/slenderman-maze-room-4/images/onButton.png";
const OFF = "https://austijn.github.io/slenderman-maze-room-4/images/offButton.png";

function checkButtons(code) {
  for (let i = 1; i < 17; i++) {
    const btn = document.getElementById("button" + i);
    if (code.includes(i)) {
      if (btn.src !== ON) return false;
    } else {
      if (btn.src !== OFF) return false;
    }
  }
  return true;
}

function genarateRandomNumber(max) {
  const randomInteger = Math.floor(Math.random() * max) + 1;
  return randomInteger;
}

function numberToDirection(num) {
  if (num == 1) {
    return "Left";
  } else if (num == 2) {
    return "Forward";
  } else if (num == 3) {
    return "Right";
  }
}

function genarateNewCode(range) {
  num1 = genarateRandomNumber(range);
  num2 = genarateRandomNumber(range);

  do {
    num2 = genarateRandomNumber(range);
  } while (num2 == num1);

  num3 = genarateRandomNumber(range);

  do {
    num3 = genarateRandomNumber(range);
  } while (num3 == num1 || num3 == num2);

  num4 = genarateRandomNumber(range);

  do {
    num4 = genarateRandomNumber(range);
  } while (num4 == num1 || num4 == num2 || num4 == num3);

  return [num1, num2, num3, num4];
}

function randomRoom(difficulty) {
  signPosition = genarateRandomNumber(3);
  slendermanPosition = 0;

  currentSymbol = symbols[randomCode[currentCodePosition - 1] - 1];

  if (Array.isArray(currentSymbol) == true) {
    singleSymbol.style.display = "none";
    doubleSymbol.style.display = "flex";

    halfSymbol1.src = "images/symbols/" + currentSymbol[0] + ".png";
    halfSymbol2.src = "images/symbols/" + currentSymbol[1] + ".png";
  } else {
    singleSymbol.style.display = "flex";
    doubleSymbol.style.display = "none";

    smallSymbol.src = "images/symbols/" + currentSymbol + ".png";
  }

  if (difficulty < 3) {
    if (currentSymbolPosition >= 2 && currentSymbolPosition < 4) {
      rando = genarateRandomNumber(2);
      if (signPosition == 1) {
        if (rando == 1) {
          slendermanPosition = 2;
        } else {
          slendermanPosition = 3;
        }
      } else if (signPosition == 2) {
        if (rando == 1) {
          slendermanPosition = 1;
        } else {
          slendermanPosition = 3;
        }
      } else if (signPosition == 3) {
        if (rando == 1) {
          slendermanPosition = 1;
        } else {
          slendermanPosition = 2;
        }
      }
    } else if (currentSymbolPosition >= 4 && currentSymbolPosition < 8) {
      slendermanPosition = genarateRandomNumber(3);
    }
  } else {
    slendermanPosition = 2;
  }

  signPosition = numberToDirection(signPosition);
  slendermanPosition = numberToDirection(slendermanPosition);
}

function typeText(text, speed = 50) {
  dialogueText.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      dialogueText.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

function openDialogue() {
  dialogueModal.style.display = "flex";
  typeText("i love");
  setTimeout(function () {
    closeDialogue();
  }, 10000);
}

function closeDialogue() {
  dialogueModal.style.display = "none";
}

function handDown() {
  document.getElementById("equip").play();
  hand.classList.add("down");
  black.classList.remove("invisible");
  black.classList.add("visible");
  if (currentRoom == "Backward") {
    breaker.classList.remove("breakerIndex");
  }
}

function handUp() {
  hand.classList.add("up");
  hand.classList.remove("down");
  black.classList.add("invisible");
  black.classList.remove("visible");
  setTimeout(function () {
    hand.classList.remove("up");
    if (currentRoom == "Backward") {
      breaker.classList.add("breakerIndex");
    }
    canClick = true;
  }, 500);
}

function checkRoom() {
  if (currentSymbolPosition >= 8 && currentRoom != "Backward") {
    slendermanVisible = genarateRandomNumber(2);
    if (slendermanVisible == 1 && difficulty < 3) {
      static.classList.remove("staticGrow");
      static.classList.add("translucent");
      slendermanPosition = currentRoom;
    }
  }

  if (currentRoom == slendermanPosition) {
    if (difficulty < 3) {
      document.getElementById("slenderSound").pause();
      document.getElementById("slenderSound").currentTime = 0;
      document.getElementById("slenderSound").play();
      slenderman.classList.remove("invisibleNon");
      setTimeout(function () {
        static.classList.add("staticGrow");
        static.classList.remove("translucent");
      }, 500);
    } else {
      slenderman.classList.remove("invisibleNon");
    }
  } else {
    document.getElementById("slenderSound").pause();
    document.getElementById("slenderSound").currentTime = 0;
    slenderman.classList.add("invisibleNon");
    static.classList.remove("staticGrow");
    static.classList.add("translucent");
  }

  if (currentRoom == signPosition) {
    seenSymbol = true;
    sign.classList.remove("invisibleNon");
    singleSymbol.classList.remove("invisibleNon");
    doubleSymbol.classList.remove("invisibleNon");
  } else {
    sign.classList.add("invisibleNon");
    singleSymbol.classList.add("invisibleNon");
    doubleSymbol.classList.add("invisibleNon");
  }

  if (currentRoom == "Backward") {
    hand.classList.add("dark");
    breaker.classList.remove("invisibleNon");
  } else {
    hand.classList.remove("dark");
    breaker.classList.add("invisibleNon");
  }
}

function leftButton() {
  if (canClick == true) {
    canClick = false;
    handDown();
    if (currentRoom == "Forward") {
      currentRoom = "Left";
      compass.src = "images/compassLeft.png";
    } else if (currentRoom == "Backward") {
      currentRoom = "Right";
      compass.src = "images/compassRight.png";
    } else if (currentRoom == "Left") {
      currentRoom = "Backward";
      compass.src = "images/compassBackward.png";
    } else if (currentRoom == "Right") {
      currentRoom = "Forward";
      compass.src = "images/compassForward.png";
    }

    if (currentRoom == "Backward") {
      setTimeout(function () {
        hall.src = "images/breakerWall.png";
        hand.src = "images/cheatsheet.png";
      }, 500);
    } else {
      setTimeout(function () {
        hall.src = "images/hall.png";
        hand.src = "images/flashlight.png";
      }, 500);
    }
    setTimeout(function () {
      checkRoom();
      handUp();
    }, 500);
  }
}

function rightButton() {
  if (canClick == true) {
    canClick = false;
    handDown();
    if (currentRoom == "Forward") {
      currentRoom = "Right";
      compass.src = "images/compassRight.png";
    } else if (currentRoom == "Backward") {
      currentRoom = "Left";
      compass.src = "images/compassLeft.png";
    } else if (currentRoom == "Left") {
      currentRoom = "Forward";
      compass.src = "images/compassForward.png";
    } else if (currentRoom == "Right") {
      currentRoom = "Backward";
      compass.src = "images/compassBackward.png";
    }
    if (currentRoom == "Backward") {
      setTimeout(function () {
        hall.src = "images/breakerWall.png";
        hand.src = "images/cheatsheet.png";
      }, 500);
    } else {
      setTimeout(function () {
        hall.src = "images/hall.png";
        hand.src = "images/flashlight.png";
      }, 500);
    }
    setTimeout(function () {
      checkRoom();
      handUp();
    }, 500);
  }
}

function downButton() {
  if (canClick == true) {
    canClick = false;
    handDown();
    if (currentRoom == "Forward") {
      currentRoom = "Backward";
      compass.src = "images/compassBackward.png";
    } else if (currentRoom == "Backward") {
      currentRoom = "Forward";
      compass.src = "images/compassForward.png";
    } else if (currentRoom == "Left") {
      currentRoom = "Right";
      compass.src = "images/compassRight.png";
    } else if (currentRoom == "Right") {
      currentRoom = "Left";
      compass.src = "images/compassLeft.png";
    }

    if (currentRoom == "Backward") {
      setTimeout(function () {
        hall.src = "images/breakerWall.png";
        hand.src = "images/cheatsheet.png";
      }, 500);
    } else {
      setTimeout(function () {
        hall.src = "images/hall.png";
        hand.src = "images/flashlight.png";
      }, 500);
    }
    setTimeout(function () {
      checkRoom();
      handUp();
    }, 500);
  }
}

function breakerButton(e) {
  if (!e.classList.contains("green") && canClick == true) {
    document.getElementById("click").pause();
    document.getElementById("click").currentTime = 0;
    document.getElementById("click").play();

    if (e.src == "https://austijn.github.io/slenderman-maze-room-4/images/onButton.png") {
      e.src = "images/offButton.png";
      e.classList.remove("green");
    } else {
      e.src = "images/onButton.png";

      if (
        e.id.replace("button", "") ==
          String(randomCode[currentCodePosition - 1]) &&
        seenSymbol == true
      ) {
        seenSymbol = false;
        currentSymbolPosition += 1;
        document.getElementById("correct").play();
        e.classList.add("green");
        if (currentCodePosition < 4) {
          currentCodePosition += 1;
          randomRoom(difficulty);
        }
      }

      if (!e.classList.contains("green") && !dead) {
        redVingette.classList.remove("invisible");
        battery -= 5;
        batteryNumber.textContent = battery + "%";
        if (battery < 0) {
          outOfBattery();
        }
        document.getElementById("shock").pause();
        document.getElementById("shock").volume = 0.25;
        document.getElementById("shock").currentTime = 0;
        document.getElementById("shock").play();
        setTimeout(function () {
          redVingette.classList.add("invisible");
        }, 1);
      }
    }

    if (checkButtons([num1, num2, num3, num4])) {
      canClick = false;
      if (currentSymbolPosition >= 2) {
        randomCode = genarateNewCode(16);
      } else {
        randomCode = genarateNewCode(8);
      }
      currentCodePosition = 1;
      difficulty += 1;
      document.getElementById("siren").pause();
      document.getElementById("siren").currentTime = 0;
      document.getElementById("siren").play();
      if (difficulty == 3) {
        document.getElementById("wind").pause();
        document.getElementById("amb").pause();
        slenderImg.src = "images/baldi.png";
        setTimeout(function () {
          document.getElementById("timerDiv").style.display = "flex";
          document.getElementById("baldi").loop = true;
          document.getElementById("baldi").volume = 0.5;
          document.getElementById("baldi").play();
          iambaldi = true;
          document.getElementById("sponge").play();
          document.getElementById("timerDiv").style.display = "flex";
          document.getElementById("timerText").textContent = String(timer);
        }, 500);
      }
      if (difficulty == 4) {
        ending();
      }
      difficultyText.textContent = String(difficulty);
      document.body.classList.add("saturate" + String(difficulty));
      randomRoom(difficulty);
      setTimeout(function () {
        for (let i = 1; i < 17; i++) {
          document.getElementById("button" + String(i)).src =
            "images/offButton.png";
          document
            .getElementById("button" + String(i))
            .classList.remove("green");
        }
        canClick = true;
      }, 500);
    }
  }
}

function outOfBattery() {
  dead = true;
  document.getElementById("slenderSound").pause();
  document.getElementById("slendermanDeath").play();
  black2.style.display = "flex";
  setTimeout(function () {
    black2.classList.add("invisibleNon");
    setTimeout(function () {
      black2.classList.remove("invisibleNon");
      setTimeout(function () {
        black2.classList.add("invisibleNon");
        setTimeout(function () {
          black2.classList.remove("invisibleNon");
        }, 127);
      }, 127);
    }, 127);
  }, 127);

  setTimeout(function () {
    black2.classList.add("invisibleNon");
    setTimeout(function () {
      black2.classList.remove("invisibleNon");
      setTimeout(function () {
        black2.classList.add("invisibleNon");
        setTimeout(function () {
          black2.classList.remove("invisibleNon");
        }, 127);
      }, 127);
    }, 127);
  }, 886);

  setTimeout(function () {
    static.classList.remove("staticGrow");
    static.classList.add("translucent");
    static.classList.remove("staticIndexOG");
    static.classList.add("staticIndex");
    setTimeout(function () {
      static.classList.add("staticGrow");
      static.classList.remove("translucent");
      setTimeout(function () {
        document.getElementById("slendermanJumpscare").style.display = "flex";
      }, 1000);
    }, 500);
  }, 3000);

  setTimeout(function () {
    location.reload(true);
  }, 8000);
}

function drainBattery() {
  if (!dead) {
    if (dead == false) {
      battery -= 1;
      batteryNumber.textContent = battery + "%";
      if (battery < 0) {
        outOfBattery();
      }
    }
  }
}

function checkSlender() {
  if (!dead) {
    if (
      static.classList.contains("staticGrow") &&
      !hand.classList.contains("down")
    ) {
      battery -= 1;
      batteryNumber.textContent = battery + "%";
      opacity = parseFloat(getComputedStyle(static).opacity);
      if (battery < 0 || opacity == "1") {
        outOfBattery();
      }
    }
  }
}

randomCode = genarateNewCode(8);
randomRoom(difficulty);
checkRoom();











