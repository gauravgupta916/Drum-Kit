var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clickHandler);
}

function clickHandler() {
  //console.log(this.innerHTML);
  //this.style.color = "white";
  var audioName = "sounds/";
  if (this.innerHTML == "w") {
    audioName += "crash.mp3";
  }
  else if (this.innerHTML == "a") {
    audioName += "kick-bass.mp3";
  }
  else if (this.innerHTML == "a") {
    audioName += "snare.mp3";
  }
  else if (this.innerHTML == "a") {
    audioName += "tom-1.mp3";
  }
  else if (this.innerHTML == "a") {
    audioName += "tom-2.mp3";
  }
  else if (this.innerHTML == "a") {
    audioName += "tom-3.mp3";
  }
  else {
    audioName += "tom-4.mp3";
  }
  var audio = new Audio(audioName);
  audio.play();

  buttonAnimation(this.innerHTML);
}

document.addEventListener("keydown", function (event) {
  console.log(event);
  var e = event.key.toLowerCase();
  if (e == "w") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  else if (e == "a") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
  else if (e == "s") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
  else if (e == "d") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  else if (e == "j") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  else if (e == "k") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  else if (e == "l") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  buttonAnimation(e);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  var delayInMilliseconds = 200; //200 millisecond

  setTimeout(function () {
    //your code to be executed after 200 millisecond
    activeButton.classList.remove("pressed");
  }, delayInMilliseconds);
}