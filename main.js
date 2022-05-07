const articles = [
    {
        title: 'This is freedom',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',

    },

    {
        title: 'This is brething',
        image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },

    {
        title: 'This is love',
        image: 'https://images.unsplash.com/photo-1603955389958-8ab4c2025b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    }
]

const img = document.querySelector('img');
const h1 = document.querySelector('h1');

let active = 0;

img.src = articles[active].image;
h1.textContent = articles[active].title;

const changeSlide = () => {
    active++;

    if (active === articles.length) {
        active = 0;
    }

    img.src = articles[active].image;
    h1.textContent = articles[active].title;

}

setInterval(changeSlide, 2000);
