const typesData = [
  {
    img: 'images/type-last.png',
    desc: 'A single-piece last ideal for durability and classic footwear molding.'
  },
  {
    img: 'images/type-last.png',
    desc: 'Open-back last with scooped heel for easy removal and better airflow.'
  },
  {
    img: 'images/type-last.png',
    desc: 'Hinged last for complex assembly with secure fit and precise alignment.'
  },
  {
    img: 'images/type-last.png',
    desc: 'Automatic sliding hinge mechanism for rapid prototyping.'
  },
  {
    img: 'images/type-last.png',
    desc: 'Step-cut hinge last combining firm support with ease of removal.'
  },
  {
    img: 'images/type-last.png',
    desc: 'Straight-V cut last engineered for specialized orthotic applications.'
  }
];

let current = 0;
const lis = document.querySelectorAll('.last-types li');
const imgEl = document.getElementById('lastImage');
const descEl = document.getElementById('lastDescription');

function showType(index) {
  lis[current].classList.remove('active');
  current = index;
  lis[current].classList.add('active');
  imgEl.src = typesData[current].img;
  descEl.textContent = typesData[current].desc;
}

lis.forEach((li, index) => {
  li.addEventListener('click', () => {
    showType(index);
    resetAuto();
  });
});

let auto = setInterval(() => {
  showType((current + 1) % typesData.length);
}, 6000);

function resetAuto() {
  clearInterval(auto);
  auto = setInterval(() => {
    showType((current + 1) % typesData.length);
  }, 6000);
}

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


    // partner slider code here
      $(document).ready(function(){
      $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        dots: false,
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


    // testimonial slider code here 
     $(document).ready(function(){
    $('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
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