import './style.css';
import './assets/images/batman.png';
import './assets/images/image1.png';
import './assets/images/image2.png';
import './assets/images/image3.png';
import './assets/images/image4.png';
import './assets/images/image5.png';
import './assets/images/image6.png';
import './assets/images/image7.png';
import './assets/images/image8.png';
import './assets/images/image9.png';
import './assets/images/image10.png';
import './assets/images/image11.png';

import swiper from './modules/slideshow.js';

// scroll spy
const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }

  section.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 200;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document
          .querySelector(`.header .navbar a[href*=${id}]`)
          .classList.add('active');
      });
    }
  });
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};
