document.getElementById("home").setAttribute("class", "active");

function about() {
  document.getElementById("aboutme").setAttribute("class", "active");
  document.getElementById("home").removeAttribute("class");
  document.getElementById("myskills").removeAttribute("class");
  document.getElementById("contactme").removeAttribute("class");
}

function home() {
  document.getElementById("aboutme").removeAttribute("class");
  document.getElementById("home").setAttribute("class", "active");
  document.getElementById("myskills").removeAttribute("class");
  document.getElementById("contactme").removeAttribute("class");
}

function skills() {
  document.getElementById("aboutme").removeAttribute("class");
  document.getElementById("home").removeAttribute("class");
  document.getElementById("myskills").setAttribute("class", "active");
  document.getElementById("contactme").removeAttribute("class");
}

function contact() {
  document.getElementById("aboutme").removeAttribute("class");
  document.getElementById("home").removeAttribute("class");
  document.getElementById("myskills").removeAttribute("class");
  document.getElementById("contactme").setAttribute("class", "active");
}

function videoUrl(video) {
  document.getElementById("slider").src = video;
}

var app = document.getElementById("about-detail");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Web Developer")
  .pauseFor(1800)
  .deleteChars(8)
  .typeString("Designer")
  .pauseFor(1800)
  .deleteAll()
  .typeString("Technology enthusiast")
  .pauseFor(1800)
  .start();
