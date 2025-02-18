export default function homepage() {
const content = document.getElementById('content');
content.innerHTML = '';
const h1 = document.createElement('h1');
h1.textContent = "Yggdrasil Tuber Tavern";

const h2 = document.createElement('h2');
h2.textContent = "Nordic themed potato bar"

const hero = document.createElement('div');
hero.classList.add('hero');

const welcomeText = document.createElement('p');
welcomeText.textContent = "Yggdrasil Tuber Tavern is a Nordic themed potato bar located in the heart of the city. We offer a variety of tuber dishes, from traditional baked potatoes to unique tuber-based dishes. Our menu is inspired by the rich culinary traditions of the Nordic countries, and we use only the freshest ingredients to create delicious and satisfying meals. Whether you're looking for a quick lunch or a hearty dinner, Yggdrasil Tuber Tavern has something for everyone.";

content.appendChild(h1);
content.appendChild(h2);
content.appendChild(hero);
content.appendChild(welcomeText);
}