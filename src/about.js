export default function about() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const h2 = document.createElement('h2');
    h2.textContent = "About";

    const aboutText = document.createElement('p');
    aboutText.textContent = "This is an exercise website for the Odin Project's Full Stack JavaScript curriculum. The website is a fictional place.";

    content.appendChild(h2);
    content.appendChild(aboutText);
}