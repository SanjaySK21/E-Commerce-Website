const bar = document.getE1ementById( ' bar' ) ;
const close = document.getE1ementById( 'close' ) ;
const nav = document.getE1ementById( ' navbar' ) ;

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    bar.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// Get references to the links and the content container
const shop = document.getElementById('page1Link');
const blog = document.getElementById('page2Link');
const about = document.getElementById('page3Link');
const contact = document.getElementById('page4Link');
const cart = document.getElementById('page5Link');

const contentContainer = document.getElementById('content');

// Function to load and display content from a given HTML file
function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(content => {
            contentContainer.innerHTML = content;
        });
}

// Event listeners to load pages when links are clicked
page1Link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior (full page reload)
    loadPage('shop.html');
});

page2Link.addEventListener('click', (e) => {
    e.preventDefault();
    loadPage('blog.html');
});
page3Link.addEventListener('click', (e) => {
    e.preventDefault();
    loadPage('about.html');
});
page4Link.addEventListener('click', (e) => {
    e.preventDefault();
    loadPage('contact.html');
});
page5Link.addEventListener('click', (e) => {
    e.preventDefault();
    loadPage('cart.html');
});

