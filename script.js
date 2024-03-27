var modal = document.getElementById("myModal");
var imgs = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function fadeIn(element, time) {
  var op = 0; // initial opacity
  element.style.display = "block";
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    op += time / 1000;
  }, time);
}

for (let i = 0; i < imgs.length; i++) {
  let img = imgs[i];
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    captionText.style.display = "block";
    fadeIn(captionText, 100);
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
  captionText.style.opacity = "0";
};

var form = document.getElementById("form-modal");
var msgBtn = document.getElementById("message-btn");
var cancelBtn = document.getElementById("cancel-btn");

msgBtn.onclick = function () {
  form.style.transform = "translateX(0)"; /* Slide in */
  form.style.visibility = "visible"; /* Show the modal */
};

cancelBtn.onclick = function () {
  /* form.style.transform = "translateX(100%)";
  form.addEventListener("transitionend", function () {
    if (form.style.transform === "translateX(100%)") {
    }
  }); */
  form.style.visibility = "hidden";
};
