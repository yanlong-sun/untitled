const navBar = document.querySelector(".header");
const nav = document.querySelector(".nav-items");
const contact = document.querySelector(".contact");
const btnReadMore = document.querySelectorAll(".more");
const btnReadLess = document.querySelectorAll(".less");
// ********** //
// Nav Bar //
// ********** //
const handleHover = function (e) {
  const item = e.target;
  const siblings = item.closest(".nav-items").querySelectorAll(".item");
  siblings.forEach((el) => {
    if (el !== item) el.style.opacity = this;
  });
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// sticky nav

// ********** //
// introduction //
// ********** //

const handleHoverIcons = function (e) {
  const item = e.target;
  const siblings = item
    .closest(".contact-info")
    .querySelectorAll(".icon-contact");
  siblings.forEach((el) => {
    if (el !== item) el.style.opacity = this;
  });
};
contact.addEventListener("mouseover", handleHoverIcons.bind(0.5));
contact.addEventListener("mouseout", handleHoverIcons.bind(1));

// ********** //
// Terminal //
// ********** //
const input = ["Hello, welcome to my personal webpage!", "My name is Yanlong"];
const color = ["#f4ab9b", "#ffe38a"];
consoleText(input, "id", color);
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  let visible = true;
  const con = document.getElementById("console");
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}

// ********** //
// experience //
// ********** //

// read more
btnReadMore.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    const moreBtn = e.target;
    const lessBtn = moreBtn.nextElementSibling;
    moreBtn.parentElement.previousElementSibling.firstElementChild.style.height =
      "auto";
    moreBtn.classList.remove("show-active");
    lessBtn.classList.add("show-active");
    moreBtn.previousElementSibling.style.width = "0";
  });
});

btnReadLess.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    const lessBtn = e.target;
    const moreBtn = lessBtn.previousElementSibling;
    lessBtn.parentElement.previousElementSibling.firstElementChild.style.height =
      "5rem";
    lessBtn.classList.remove("show-active");
    moreBtn.classList.add("show-active");
    moreBtn.previousElementSibling.style.width = "100%";
  });
});

///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
