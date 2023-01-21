var numberOfDrumBtn = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "h":
        var hihit = new Audio("sounds/hihit.mp3");
        hihit.play();
        break;
      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "k":
        var kick = new Audio("sounds/kick.wav");
        kick.play();
        break;
      case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      default:
        console.log(buttonInnerHTML);
        break;
    }
  }
}

document.addEventListener("keypress", function (event) {
  var keyVaule = event.key;
  switch (keyVaule) {
    case "w":
      console.log(keyVaule);
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      console.log(keyVaule);
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      console.log(keyVaule);
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      console.log(keyVaule);
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "h":
      var hihit = new Audio("sounds/hihit.mp3");
      hihit.play();
      break;
    case "j":
      console.log(keyVaule);
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      console.log(keyVaule);
      var kick = new Audio("sounds/kick.wav");
      kick.play();
      break;
    case "l":
      console.log(keyVaule);
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log("unknown key pressed");
      break;
  }
});
