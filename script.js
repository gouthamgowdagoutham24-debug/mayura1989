const navMenu = document.querySelector('.nav__menu');

if (navMenu) {
  navMenu.addEventListener('click', () => {
    const expanded = navMenu.getAttribute('aria-expanded') === 'true';
    navMenu.setAttribute('aria-expanded', String(!expanded));
    document.querySelector('.nav').classList.toggle('nav--open', !expanded);
  });
}

const galleryImages = document.querySelectorAll('.gallery-image');
const heroGallery = document.querySelector('.menu-cover__gallery');
let galleryIndex = 0;

function showGalleryImage(nextIndex) {
  galleryImages[galleryIndex].classList.remove('gallery-image--active');
  galleryIndex = (nextIndex + galleryImages.length) % galleryImages.length;
  galleryImages[galleryIndex].classList.add('gallery-image--active');
}

if (galleryImages.length > 1) {
  window.setInterval(() => {
    showGalleryImage(galleryIndex + 1);
  }, 4200);
}

let heroTouchStartX = 0;
let heroTouchStartY = 0;

if (heroGallery) {
  heroGallery.addEventListener('touchstart', (event) => {
    const [touch] = event.touches;
    heroTouchStartX = touch.clientX;
    heroTouchStartY = touch.clientY;
  }, { passive: true });

  heroGallery.addEventListener('touchend', (event) => {
    const [touch] = event.changedTouches;
    const deltaX = touch.clientX - heroTouchStartX;
    const deltaY = touch.clientY - heroTouchStartY;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    showGalleryImage(galleryIndex + (deltaX < 0 ? 1 : -1));
  }, { passive: true });
}

const menuSections = [
  {
    title: 'Desserts',
    items: ['Mulberry Delight|189', 'Sitahal Delight|189', 'Alphonso Mango Delight|189', 'Spl Pure Ice Creams|199', 'Gulab Jamun with Ice Cream|189', 'Carrot Halwa|129', 'Gulab Jamun|129', 'Choice of Ice Creams|99']
  },
  {
    title: 'Mayura Signature Mocktails / Beverages',
    items: ['Avakaya Mojitho|199', 'Chilly Guava|199', 'Mysore Mallige|199', 'Quickgun Murugan|199', 'Betting Raja|199', 'Hey! Chikitha|199', 'Goli Soda|99', 'Fresh Lime Masala Soda (Half/Full)|69 / 99', 'Fresh Lime Water (Half/Full)|59 / 89', 'Soft Drinks|49', 'Water Bottle (Half/Full)|19 / 39']
  },
  {
    title: 'Indian Gravies',
    items: ['Prawns Masala|329', 'Fish Masala|329', 'Mutton Khorma|329', 'Mutton Rogan Josh|329', 'Chicken Afghani|329', 'Chicken Butter / Kadai / Tikka / Khorma / Kolapuri / Hyderabadi|299', 'Egg Masala|289', 'Paneer Butter / Palak / Tikka / Khorma / Kolapuri / Hyderabadi|289', 'Kaju Masala|289', 'Mushroom Butter / Palak / Tikka / Khorma / Kolapuri / Hyderabadi|289', 'Corn Palak|269', 'Plain Palak|249', 'Veg Butter Khorma / Kolapuri / Hyderabadi|249', 'Dal Tadka / Palak / Tomato|229']
  },
  {
    title: 'Tandoor Non Veg',
    items: ['Non Veg Platter (Mix of 14 Pcs)|1499', 'Tandoori Jinga|399', 'Fish Tikka|399', 'Mutton Sheek Kabab|399', 'Mutton Burra Kabab|399', 'Ayurvedic Chicken Wings|399', 'Tandoori Chicken (Half/Full)|349 / 649', 'Gongura Chicken Kabab|399', 'Methi Malai Murg Kabab|399', 'Chicken Tikka|369', 'Kalmi Kabab (Half/Full)|199 / 399', 'Tangdi Kabab (Half/Full)|199 / 399']
  },
  {
    title: 'Tandoor Veg Starters',
    items: ['Veg Platter (Mix of 20 Pcs)|1199', 'Makai Sheek Kabab|329', 'Brocolli Malai Kabab|329', 'Paneer Tikka|329', 'Mushroom Tikka|329', 'Hara Bara Kabab|329', 'Gobi Tikka|299']
  },
  {
    title: 'Indian Breads',
    items: ['Assorted Roti Basket (Mix of 16 Pcs)|399', 'Paneer / Aloo / Gobi Paratha|129', 'Garlic Naan|99', 'Lacha Paratha|69', 'Kulcha Masala / Plain|79 / 69', 'Naan Butter / Plain|69 / 59', 'Tandoori Roti Butter / Plain|59 / 49']
  },
  {
    title: 'Non Vegetarian Starters (Chinese)',
    items: ['Golden Fried Prawns|369', 'Prawns 65 / Manchuria / Pepper Dry / Chilly|369', 'Fish Finger|369', 'Fish 65 / Manchuria / Pepper Dry / Chilly|369', 'Mutton Kheema Pocket Rolls|369', 'Chicken Wings in Garlic Sauce|369', 'Chicken Dragon Roll|369', 'Chicken 65 / Manchuria / Pepper Dry / Chilly|329', 'Chicken Drumsticks / Lollypop|329', 'Egg 65 / Manchuria / Pepper Dry / Chilly|299']
  },
  {
    title: 'Vegetarian Starters (Chinese)',
    items: ['Veg Pocket Roll|349', 'Veg Spring Roll|329', 'Paneer 65 / Manchuria / Pepper Dry / Chilly|329', 'Golden Fried Babycorn|299', 'Mushroom 65 / Manchuria / Pepper Dry / Chilly|299', 'Babycorn 65 / Manchuria / Pepper Dry / Chilly|299', 'Gobi 65 / Manchuria / Pepper Dry / Chilly|269']
  },
  {
    title: 'Main Course (Chinese)',
    items: ['Scezhwan Chicken Fried Rice / Noodles|329', 'Chicken Fried Rice / Noodles|319', 'Scezhwan Egg Fried Rice / Noodles|299', 'Egg Fried Rice / Noodles|289', 'Scezhwan Veg Fried Rice / Noodles|269', 'Veg Fried Rice / Noodles|249']
  },
  {
    title: 'Soups',
    items: ['Crab Meat Soup|189', 'Manchow Soup|169 / 129', 'Sweet Corn Soup|169 / 129', 'Hot & Sour Soup|169 / 129']
  },
  {
    title: 'Salads',
    items: ['Exotic Veg Salad|199', 'American Corn Salad|149', 'Tossed Salad|129', 'Green Salad|99']
  },
  {
    title: 'Egg Starters',
    items: ['Chilly Garlic Egg Fry|269', 'Egg Kabab|269', 'Chilly Egg (Andhra Style)|249', 'Masala Omelette|129', 'Boiled Eggs (3 Nos)|99']
  },
  {
    title: 'Veg',
    items: ['Palak Liver Fry (Pure Veg)|299', 'Sholay Kabab Paneer / Broccoli / Mushroom|299', 'Gobi Sholay / Pakodi|269', 'Kakarakai Bullets|229']
  },
  {
    title: 'Mayura Signature Starters',
    items: ['Prawns Pandumirchi / Pachim irchi / Kothimeera / Karivepaku|369', 'Fish Pandumirchi / Pachim irchi / Kothimeera / Karivepaku|369', 'Chicken Pandumirchi / Pachim irchi / Kothimeera / Karivepaku|349', 'Egg Pandumirchi / Pachim irchi / Kothimeera / Karivepaku|319', 'Paneer Pandumirchi / Pachim irchi / Kothimeera / Karivepaku|329', 'Mushroom Pandumirchi / Pachim irchi / Kothimeera / Karivepaku|329', 'Babycorn Pandumirchi / Pachim irchi / Kothimeera / Karivepaku|309']
  },
  {
    title: 'Authentic Andhra Starters',
    items: ['Andhra Chicken Plater|999', '(2 Pcs Kabab, 2 Pcs Guntur, 2 Pcs Chilly Chicken, 2 Chicken Fry, 2 Chicken Roast)|', 'Pomfret Tawa Roast|499', 'Anjal Tawa Fry|489', 'Baby Prawns Pakodi|399', 'Rajamundry Fish Pakodi|389', 'Mutton Kheema Balls|389', 'Mutton Ghee Roast|389', 'Mutton Fry|389', 'Chicken Sholay Kabab|349', 'Chicken Ghee Roast|329', 'Chicken 65 Andhra Style|329', 'Godavari Wings|329', 'Nuvvula Chicken Kabab|329', 'Lemon Chicken Andhra Style|329', 'Chicken Kshatriya|329', 'Chicken Roast|319', 'Guntur Chicken|319', 'Chicken Fry|309', 'Chilly Chicken Andhra Style|309']
  },
  {
    title: 'Mayura Specials Rasam',
    items: ['Mutton Paya Soup half|189', 'Kothimeera Chicken Rasam|169', 'Drumstick and Moringa Rasam|149']
  }
];

const menuOrder = [
  'Authentic Andhra Starters',
  'Mayura Signature Starters',
  'Tandoor Non Veg',
  'Tandoor Veg Starters',
  'Non Vegetarian Starters (Chinese)',
  'Vegetarian Starters (Chinese)',
  'Egg Starters',
  'Veg',
  'Soups',
  'Salads',
  'Indian Breads',
  'Indian Gravies',
  'Main Course (Chinese)',
  'Mayura Specials Rasam',
  'Mayura Signature Mocktails / Beverages',
  'Desserts'
];

menuSections.sort((first, second) => menuOrder.indexOf(first.title) - menuOrder.indexOf(second.title));

const menuBook = document.querySelector('.menu-book');
const menuPage = document.querySelector('.menu-page');
const menuContent = document.querySelector('.menu-page__content');
const menuNumber = document.querySelector('.menu-page__number');
const menuProgress = document.querySelector('.menu-progress');
const menuOpen = document.querySelector('.menu-open');
const menuPrevious = document.querySelector('.menu-prev');
const menuNext = document.querySelector('.menu-next');
let menuIndex = -1;

function renderMenuPage() {
  if (menuIndex < 0) return;
  const section = menuSections[menuIndex];
  menuContent.innerHTML = `<h3 class="menu-page__heading">${section.title}</h3><div class="menu-page__rule"></div>${section.items.map((item) => { const [name, price] = item.split('|'); return `<p class="menu-item"><span class="menu-item__name">${name}</span><span class="menu-item__dots"></span><span class="menu-item__price">${price ? `&#8377; ${price}*` : ''}</span></p>`; }).join('')}`;
  menuNumber.textContent = String(menuIndex + 1).padStart(2, '0');
  menuProgress.textContent = `${menuIndex + 1} / ${menuSections.length}`;
  menuPrevious.disabled = menuIndex === 0;
  menuNext.textContent = menuIndex === menuSections.length - 1 ? 'Back to cover ' : 'Next page ';
  menuNext.insertAdjacentHTML('beforeend', `<span aria-hidden="true">${menuIndex === menuSections.length - 1 ? '&#8634;' : '&#8594;'}</span>`);
  menuPage.classList.remove('is-turning');
  window.requestAnimationFrame(() => menuPage.classList.add('is-turning'));
}

menuOpen.addEventListener('click', () => {
  menuBook.classList.add('is-open');
  menuIndex = 0;
  renderMenuPage();
});

menuPrevious.addEventListener('click', () => {
  if (menuIndex > 0) {
    menuIndex -= 1;
    renderMenuPage();
  }
});

menuNext.addEventListener('click', () => {
  if (menuIndex === menuSections.length - 1) {
    menuBook.classList.remove('is-open');
    menuIndex = -1;
    menuProgress.textContent = 'Cover';
    menuNext.innerHTML = 'Next page <span aria-hidden="true">&#8594;</span>';
    return;
  }
  menuBook.classList.add('is-open');
  menuIndex += 1;
  renderMenuPage();
});

let menuTouchStartX = 0;
let menuTouchStartY = 0;

menuBook.addEventListener('touchstart', (event) => {
  const [touch] = event.touches;
  menuTouchStartX = touch.clientX;
  menuTouchStartY = touch.clientY;
}, { passive: true });

menuBook.addEventListener('touchend', (event) => {
  const [touch] = event.changedTouches;
  const deltaX = touch.clientX - menuTouchStartX;
  const deltaY = touch.clientY - menuTouchStartY;

  if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return;
  if (deltaX < 0) menuNext.click();
  if (deltaX > 0 && menuIndex > 0) menuPrevious.click();
}, { passive: true });

