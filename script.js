/* .js files add interaction to your website */
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
var displayScript2 = document.getElementById("scriptReturned2");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  var reason = document.getElementById("reason").value;

  displayScript.innerHTML = "Hi, my name is " + name + ". This issue matters to me because " + reason + ". Did you know? that in today's world, learning, working, and even connecting with others all rely on technology. But millions of people still struggle using outdated devices, shared phones, or unstable connections. Some even miss out entirely because they simply can't access the tools others take for granted.";
  displayScript2.innerHTML = "This isn't just a tech issue, it's a human rights issue. Everyone deserves a fair chance to learn, grow, and succeed, no matter where they live or what devices they own. <br> <br> That's why I'm rising awareness about digital access inequality. And you can help too by: <br> <br> <ul><li>Donate devices or funds to trusted organizations</li> <li>Share this message to reach more people</li> <li>Speak up and ask schools or local leaders to provide accessible tech for all</li></ul>"
}

document.addEventListener("DOMContentLoaded", () => {
const slides = document.querySelectorAll(".slider img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

  if (!prevBtn || !nextBtn || slides.length === 0) return;
  
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("slideActive");
  });
  slides[index].classList.add("slideActive");
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);
});
