for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var click = this.innerHTML;
    switch (click) {
      case "w":
        var tom = new Audio('sounds/tom-1.mp3');
        tom.play();
        break;
      case "a":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      case "s":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "d":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "j":
        var joki = new Audio('sounds/tom-4.mp3');
        joki.play();
        break;
      case "k":
        var koki = new Audio('sounds/tom-3.mp3');
        koki.play();
        break;
      case "l":
        var lolp = new Audio('sounds/tom-2.mp3');
        lolp.play();
        break;

      default:

    }
    buttonAnimation(click);

  });
}
document.addEventListener("keydown", function() {
  var button = event.key;
  switch (button) {
    case "w":
      var tom = new Audio('sounds/tom-1.mp3');
      tom.play();
      break;
    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "s":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "d":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "j":
      var joki = new Audio('sounds/tom-4.mp3');
      joki.play();
      break;
    case "k":
      var koki = new Audio('sounds/tom-3.mp3');
      koki.play();
      break;
    case "l":
      var lolp = new Audio('sounds/tom-2.mp3');
      lolp.play();
      break;

    default:

  }
  buttonAnimation(event.key);

});


// var tom = new Audio('sounds/tom-1.mp3');
// tom.play();

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
