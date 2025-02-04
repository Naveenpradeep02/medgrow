// text typing ainmation =====================================
var typed = new Typed(".auto-type", {
  strings: [
    "Digital Marketing",
    "SMM",
    "LEAD GENERATION",
    "SEO",
    "WEBSITE DESIGNING",
    "BRANDING",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
const serviceMenu = document.querySelector(".sub-service");
const menubar = document.querySelector(".menu-bar");
const menu = document.querySelector("nav ul");

// sub menue show
const showServices = (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (serviceMenu) {
    serviceMenu.classList.toggle("show-services");
  } else {
    console.error("Service menu not found!");
  }
};
// side menubar
document.addEventListener("click", (event) => {
  if (!serviceMenu.contains(event.target)) {
    serviceMenu.classList.remove("show-services");
  }
});

const showmenu = () => {
  menubar.classList.toggle("show-menu");
  menu.classList.toggle("resmenu");
};

// =================================== scroll number count============================

const counters = document.querySelectorAll(".counter span");
const container = document.querySelector(".counters");
let active = false;

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset > container.offsetTop - container.offsetHeight - 500 &&
    !active
  ) {
    counters.forEach((counter) => {
      counter.innerHTML = 0;
      let count = 0;

      const updateCount = () => {
        const target = parseInt(counter.dataset.count);
        if (count < target) {
          count++;
          counter.innerHTML = count;
          setTimeout(updateCount, 15);
        } else {
          counter.innerHTML = target;
        }
      };

      updateCount();
    });

    active = true;
  } else if (
    window.pageYOffset < container.offsetTop - container.offsetHeight - 500 &&
    active
  ) {
    counters.forEach((counter) => {
      counter.innerHTML = 0;
    });
    active = false;
  }
});

const arrow = document.getElementById("scrollArrow");
const firstSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > firstSection.offsetHeight) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});
// ========================================slider card ==========================
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides(n) {
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  document.querySelector(".slides").style.transform = `translateX(${
    -slideIndex * 100
  }%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}

function moveSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
  resetAutoSlide();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
  resetAutoSlide();
}

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 8000);
}

showSlides(slideIndex);

let autoSlideInterval = setInterval(autoSlide, 8000);
// slide 2
let slideIndex2 = 0;
const slideContainer2 = document.querySelector("#slider2");
const slides2 = document.querySelectorAll("#slider2 .multi-slide");

function autoSlide2() {
  slideIndex2++;
  if (slideIndex2 > slides2.length - 3) slideIndex2 = 0;
  slideContainer2.style.transform = `translateX(${-slideIndex2 * 33.33}%)`;
}

let autoSlideInterval2 = setInterval(autoSlide2, 3000);

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    document.querySelectorAll(".faq-answer").forEach((answer) => {
      if (answer !== question.nextElementSibling) {
        answer.style.display = "none";
      }
    });

    let answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
