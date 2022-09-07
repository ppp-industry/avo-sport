document.querySelectorAll(".popular__save").forEach((btn) => {
  btn.addEventListener("click", function () {
    let heart = this.querySelector(".fa-heart");
    if (heart.classList.contains("fa-regular")) {
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid");
    } else {
      heart.classList.remove("fa-solid");
      heart.classList.add("fa-regular");
    }
  });
});

const burger = document.querySelector(".burger-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-menu--active");
  document.querySelector("body").classList.toggle("overflow");
  document.querySelector(".navigation").classList.toggle("navigation--active");
});

const popularSlider = new Swiper(".popular-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".popular-pagination",
  },
});

const benefitsSlider = new Swiper(".benefits-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
  pagination: {
    el: ".benefits-pagination",
  },
});

const teamSlider = new Swiper(".team-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".team-pagination",
  },
});

const links = document.querySelectorAll('a[href*="#"]');

links.forEach(link => link.addEventListener('click', smoothScroll));

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop - 100;
  document.querySelector('body').style.overflow = 'initial';
  burger.classList.remove('active');
  header.classList.remove('open');

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}