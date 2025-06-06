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




//  types of last section here
 const listItems = document.querySelectorAll('.custom-list-item');
const shoeImage = document.querySelector('.shoe-image');
const imageText = document.querySelector('.image-text');

let currentIndex = 0;
let autoTimer;

function resetProgressBars() {
  listItems.forEach(item => {
    const bar = item.querySelector('.progress-bar-line');
    bar.style.transition = 'none';
    bar.style.width = '0%';
  });
}

function animateProgressBar(index, duration = 5000) {
  const bar = listItems[index].querySelector('.progress-bar-line');
  setTimeout(() => {
    bar.style.transition = `width ${duration}ms linear`;
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

function nextSlide() {
  currentIndex = (currentIndex + 1) % listItems.length;
  updateDisplay(currentIndex);
}

function startAutoPlay() {
  updateDisplay(currentIndex);
  autoTimer = setInterval(nextSlide, 6000);
}

function stopAutoPlay() {
  clearInterval(autoTimer);
}

listItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    stopAutoPlay();
    updateDisplay(index);
    setTimeout(startAutoPlay, 8000);
  });
});

startAutoPlay();


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
    text: 'Our mission is to redefine the standards of footwear components by innovating with precision and ensuring sustainability throughout our manufacturing process.',
    img: 'images/About-us.png'
  },
  {
    text: 'We envision a world where every footwear brand can rely on our shoe lasts for unmatched durability, accuracy, and customer satisfaction.',
    img: 'images/About-us.png'
  }
];

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const index = parseInt(tab.dataset.index);
    tabText.style.opacity = 0;
    tabImage.style.opacity = 0;

    setTimeout(() => {
      tabText.textContent = contentArray[index].text;
      tabImage.src = contentArray[index].img;
      tabText.style.opacity = 1;
      tabImage.style.opacity = 1;
    }, 300);
  });
});

// partner slider functionality
 $(document).ready(function(){
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
  $(document).ready(function(){
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
    // Popup gallery
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery: { enabled: true }
    });

    // Tab click handler
    $('.tab-btn').click(function () {
      const selected = $(this).data('filter');

      // Activate tab
      $('.tab-btn').removeClass('active');
      $(this).addClass('active');

      // Show selected category
      $('.gallery-item').addClass('d-none');
      $('.gallery-item[data-category="' + selected + '"]').removeClass('d-none');
    });
  });