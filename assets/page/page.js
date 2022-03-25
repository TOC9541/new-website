var toclogo = document.getElementsByClassName("toclogo");
for (var i = 0; i < toclogo.length; i++) {
  toclogo[i].onmouseover = function (e) {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(this);
    var colorString = color;
    var shadowString = "0px 0px 12px " + color;
    this.style["color"] = colorString;
    this.style["text-shadow"] = shadowString;
  };
  toclogo[i].onmouseout = function (e) {
    this.style["color"] = "#000000";
    this.style["text-shadow"] = "none";
  };
}

var title = document.getElementsByClassName("hero-title");
for (var i = 0; i < title.length; i++) {
  title[i].onmouseover = function (e) {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(this);
    var colorString = color;
    var shadowString = "0px 0px 25px " + color;
    this.style["color"] = colorString;
    this.style["text-shadow"] = shadowString;
  };
  title[i].onmouseout = function (e) {
    this.style["color"] = "#FFFFFF";
    this.style["text-shadow"] = "none";
  };
}

var logo = document.getElementsByClassName("sidebar-logo");
for (var i = 0; i < logo.length; i++) {
  logo[i].onmouseover = function (e) {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(this);
    var colorString = color;
    var shadowString = "0px 0px 25px " + color;
    this.style["color"] = colorString;
    this.style["text-shadow"] = shadowString;
  };
  logo[i].onmouseout = function (e) {
    this.style["color"] = "#FFFFFF";
    this.style["text-shadow"] = "none";
  };
}

var flogo = document.getElementsByClassName("footer-logo");
for (var i = 0; i < flogo.length; i++) {
  flogo[i].onmouseover = function (e) {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(this);
    var colorString = color;
    var shadowString = "0px 0px 25px " + color;
    this.style["color"] = colorString;
    this.style["text-shadow"] = shadowString;
  };
  flogo[i].onmouseout = function (e) {
    this.style["color"] = "#FFFFFF";
    this.style["text-shadow"] = "none";
  };
}

var content = document.getElementById("copyToClipboard");

const copyToClipboard = (str) => {
  content.innerHTML = "Copied IP to Clipboard!";
  setTimeout(function () {
    content.innerHTML = "play.tocnetwork.net";
  }, 2500);
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText("play.tocnetwork.net");
  return Promise.reject("Not available or supported by client.");
};

window.onscroll = function () {
  headerOnScroll();
};

var header = document.getElementById("header");

function headerOnScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 1) {
    header.style.transform = "translateY(0px)";
    header.style.opacity = "1";
  } else {
    header.style.transform = "translateY(-50px)";
    header.style.opacity = "0.356";
  }
}

function openNav() {
  document.getElementById("sidebar-cover").style.opacity = "1";
  document.getElementById("sidebar-cover").style.pointerEvents = "all";
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar-cover").style.opacity = "0";
  document.getElementById("sidebar-cover").style.pointerEvents = "none";
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function toTheTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
