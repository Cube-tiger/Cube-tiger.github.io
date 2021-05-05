var i = 0;
var billeder = [];
var time = 1000;

billeder[0] = "billede1.jpg"
billeder[1] = "billede2.jpg"
billeder[2] = "billede3.jpg"
billeder[3] = "billede4.jpg"
billeder[4] = "billede5.jpg"
billeder[5] = "billede6.jpg"
billeder[6] = "billede7.jpg"
billeder[7] = "billede8.jpg"
billeder[8] = "billede9.jpg"
billeder[9] = "billede10.jpg"
billeder[10] = "billede11.jpg"


function changeImg(){
  document.slide.src = billeder[i];
  if (i < billeder.length - 1) {
    i++
  }
  else {
    i=0;
  }

  setTimeout("changeImg()", time);
}


window.onload = changeImg;

// Click image
  document.getElementById("pictures").onclick = function() {pictureClicked()};

  function pictureClicked() {
    document.getElementById("picture-text").style.opacity = "1";
  }





//Click button

  document.getElementById("click-button").onclick = function() {buttonClicked()};



  function buttonClicked() {

    document.getElementById("click-button").innerHTML = "Sejt! Du er en af de 3% af verdens befolkningen der kan løse en rubik's cube!";

  }
