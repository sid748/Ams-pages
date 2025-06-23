// navigation bar functionality

const burger = document.getElementById("burgerToggle");
const menu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");

burger.addEventListener("click", () => {
  menu.classList.add("show");
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
  document.body.style.overflow = 'auto';
});

// sticky header functionality
 window.addEventListener("scroll", function () {
    const header = document.getElementById("site-header");
    const body = document.body;
    const navLinks = document.querySelectorAll("#site-header .nav-link");
    const logoDefault = document.getElementById("defaultLogo");
    const logoScrolled = document.getElementById("scrolledLogo");

    if (window.scrollY > 100) {
      header.classList.add("sticky");
      body.classList.add("sticky-header-padding");

      // Change text color of nav links
      navLinks.forEach(link => link.style.color = "#A57865");

      // Show scrolled logo, hide default
      if (logoDefault && logoScrolled) {
        logoDefault.style.display = "none";
        logoScrolled.style.display = "inline";
      }
    } else {
      header.classList.remove("sticky");
      body.classList.remove("sticky-header-padding");

      // Reset text color
      navLinks.forEach(link => link.style.color = "black");

      // Show default logo, hide scrolled
      if (logoDefault && logoScrolled) {
        logoDefault.style.display = "inline";
        logoScrolled.style.display = "none";
      }
    }
  });

  // about container functionality
  window.addEventListener("scroll", function () {
    const aboutSection = document.getElementById("about-container");

    if (window.scrollY > 100) {
      aboutSection.style.marginTop = "55px";
    } else {
      aboutSection.style.marginTop = "0";
    }
  });



// types of shoes slider functionality
const listItems = document.querySelectorAll('.custom-list-item');
const shoeImage = document.querySelector('.shoe-image');
const imageText = document.querySelector('.image-text');

let currentIndex = 0;
let autoTimer;
const slideDuration = 6000; // Match progress bar animation

function resetProgressBars() {
  listItems.forEach(item => {
    const bar = item.querySelector('.progress-bar-line');
    bar.style.transition = 'none';
    bar.style.width = '0%';
  });
}

function animateProgressBar(index) {
  const bar = listItems[index].querySelector('.progress-bar-line');
  // Start animation after 10ms
  setTimeout(() => {
    bar.style.transition = `width ${slideDuration}ms linear`;
    bar.style.width = '100%';
  }, 10);
}

function updateDisplay(index) {
  const item = listItems[index];
  const newImage = item.getAttribute('data-image');
  const newText = item.getAttribute('data-text');

  shoeImage.src = newImage;
  imageText.innerHTML = newText;

  listItems.forEach(li => li.classList.remove('active'));
  item.classList.add('active');

  resetProgressBars();
  animateProgressBar(index);

  currentIndex = index;
}

// This replaces nextSlide + setInterval
function autoplaySlides() {
  updateDisplay(currentIndex);

  autoTimer = setTimeout(() => {
    currentIndex = (currentIndex + 1) % listItems.length;
    autoplaySlides(); // recursively call for the next slide
  }, slideDuration);
}

function stopAutoPlay() {
  clearTimeout(autoTimer);
}

// Click handler also resets timer properly
listItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    stopAutoPlay();
    updateDisplay(index);
    currentIndex = index;
    setTimeout(() => {
      autoplaySlides();
    }, slideDuration + 100); // Wait until progress bar finishes
  });
});

autoplaySlides(); // 🔁 start autoplay



// about us tab functionality
const tabs = document.querySelectorAll('.tab');
const tabText = document.getElementById('tabText');
const tabImage = document.getElementById('tabImage');

const contentArray = [
  {
    text: 'Since 2017, AMS Components Industries has delivered high-quality plastic shoe lasts to leading footwear brands across India. With advanced manufacturing, technical expertise, and a customer-first approach, we help shape the future of reliable footwear solutions.',
    img: 'images/About-us.png'
  },
  {
    text: 'Our mission is to design and manufacture high-precision plastic shoe lasts that meet the evolving needs of global footwear makers. We aim to deliver unmatched quality, innovation, and consistency through cutting-edge technology, skilled craftsmanship, and customer-first service.',
    img: 'images/About-us-2.webp'
  },
  {
    text: 'Our vision is to become the most trusted and technologically advanced shoe last manufacturer worldwide. We strive to drive excellence in footwear production by continuously improving our processes, embracing innovation, and contributing to a future built on quality, sustainability, and precision.',
    img: 'images/About-us-3.webp'
  }
];

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const index = parseInt(tab.dataset.index, 10);
    tabText.textContent = contentArray[index].text;
    tabImage.src = contentArray[index].img;
  });
});

// partner slider functionality
$(document).ready(function () {
  $('.partner-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});

// testimonial slider functionality
$(document).ready(function () {
  $('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});


// counter starts here
const counters = document.querySelectorAll('.stat-number');
let started = false;

function runCounter() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const suffix = counter.getAttribute('data-suffix') || '';
    const numberSpan = counter.querySelector('.number');
    const suffixSpan = counter.querySelector('.suffix');

    let count = 0;
    const increment = Math.ceil(target / 100);

    const update = () => {
      if (count < target) {
        count += increment;
        if (count > target) count = target;
        numberSpan.textContent = count;
        suffixSpan.textContent = suffix;
        requestAnimationFrame(update);
      } else {
        numberSpan.textContent = target;
        suffixSpan.textContent = suffix;
      }
    };

    update();
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      started = true;
      runCounter();
    }
  });
}, {
  threshold: 0.4,
});

const targetSection = document.querySelector('#counter-section');
if (targetSection) observer.observe(targetSection);

// Gallery and tab functionality


$(document).ready(function () {
  // Initialize Magnific Popup
  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
  });

  // Show images for active tab
  function showSelectedCategory() {
    const selected = $('.tab-btn.active').data('filter');
    $('.gallery-item').addClass('d-none');
    $(`.gallery-item[data-category="${selected}"]`).removeClass('d-none');
  }

  // Tab click handler
  $('.tab-btn').click(function () {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    showSelectedCategory();
  });

  // Display for default active tab
  showSelectedCategory();
});

// // video popup functionality
// document.addEventListener("DOMContentLoaded", function () {
//     const playButton = document.getElementById("playButton");
//     const closeVideo = document.getElementById("closeVideo");
//     const videoContainer = document.getElementById("videoContainer");
//     const videoThumbnail = document.getElementById("videoThumbnail");
//     const mainVideo = document.getElementById("mainVideo");

//     playButton.addEventListener("click", function () {
//       videoContainer.style.display = "block";
//       videoThumbnail.style.display = "none";
//       playButton.style.display = "none";
//       mainVideo.play();
//     });

//     closeVideo.addEventListener("click", function () {
//       mainVideo.pause();
//       mainVideo.currentTime = 0;
//       videoContainer.style.display = "none";
//       videoThumbnail.style.display = "block";
//       playButton.style.display = "flex";
//     });
//   });



