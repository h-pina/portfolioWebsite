const home = document.getElementById('home');
const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

const transitionToPage = (link) => {
    document.querySelector('body').style.opacity = 0;
    setTimeout(() => window.location.href = link , 1000);
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

home.onclick = () => transitionToPage('./index.html')
about.onclick = () => transitionToPage('./about.html')
work.onclick = () => transitionToPage('./work.html')
contact.onclick = () => transitionToPage('./contact.html')