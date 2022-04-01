const home = document.getElementById('home');
const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

home.onclick = () => window.location.href = './index.html';
about.onclick = () => window.location.href = './about.html';
work.onclick = () => window.location.href = './work.html';
contact.onclick = () => window.location.href = './contact.html';