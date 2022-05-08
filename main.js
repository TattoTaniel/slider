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
        title: 'This is nature',
        image: 'https://images.unsplash.com/photo-1603955389958-8ab4c2025b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    }
]

const img = document.querySelector('img');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')];

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

    changeDote();
}

const changeDote = () => {

    const workDote = dots.findIndex(span => span.classList.contains('active'))

    dots[workDote].classList.remove('active')
    dots[active].classList.add('active')
}

let intervalIndex = setInterval(changeSlide, 2000);

const keyChangeSlide = e => {

    if (e.code == 'ArrowLeft' || e.code == 'ArrowRight') {
        clearInterval(intervalIndex);

        if (e.code == 'ArrowLeft') active--
        else active++;


        if (active === articles.length) {
            active = 0;
        }
        if (active < 0) {
            active = 2;
        }
        console.log(active);
        img.src = articles[active].image;
        h1.textContent = articles[active].title;

        changeDote();

    }
}

window.addEventListener('keydown', keyChangeSlide)