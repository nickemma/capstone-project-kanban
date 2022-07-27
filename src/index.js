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

import swiperMe from './modules/slideshow.js';
import fetchData from './modules/fetchData.js';
import addLike from './modules/addLike.js';
import mobileMenu from './modules/mobile.js';
import count from './modules/itemCounter.js';

fetchData();
swiperMe();
addLike();
mobileMenu();
count();
