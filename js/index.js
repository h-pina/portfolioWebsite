const home = document.getElementById('home');
const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');


home.onclick = () => window.location.href = '../pages/index.html';
about.onclick = () => window.location.href = '../pages/about.html';
work.onclick = () => window.location.href = '../pages/work.html';
contact.onclick = () => window.location.href = '../pages/contact.html';

home.style.opacity = 1;
about.style.opacity = 1;
work.style.opacity = 1;
contact.style.opacity = 1;