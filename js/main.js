//Swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

//Show more button
const button = document.querySelector('.btn');
const hiddenCards = document.querySelectorAll('.hidden');
const buttonImage = document.querySelector('.arrow-btn');
const buttonText = document.querySelector('.text-btn');
let flag = true;

button.addEventListener('click', function () {
    if (flag) {
        for (let card of hiddenCards) {
            card.style.display = 'flex';
            flag = false;
        }

        buttonImage.style.transform = 'rotate(180deg)';
        buttonText.innerHTML = 'Скрыть';
    } else {
        for (let card of hiddenCards) {
            card.style.display = 'none';
            flag = true;
        }

        buttonImage.style.transform = 'rotate(360deg)';
        buttonText.innerHTML = 'Посмотреть все Стикерсы';
    }
});

//Animation
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');
const slideImage = document.querySelectorAll('.swiper-slide img');
const heading = document.querySelectorAll('.heading');
const headingBig = document.querySelector('.heading-big');
const text = document.querySelector('.text');

function animateSlides() {
    slideImage.forEach(function (slideImage) {
        let opacity = 0;
        let interval = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(interval);
            } else {
                opacity += 0.01;
                slideImage.style.opacity = opacity;
            }
        }, 10);
    })
}

function leftBtnAnimation() {
    animateSlides();
    heading.forEach(function (heading) {
        heading.classList.remove('animated-one', 'animated-two');
        void heading.offsetWidth;
        heading.classList.add('animated-two');
        text.classList.remove('animated-one', 'animated-two');
        void text.offsetWidth;
        text.classList.add('animated-two');
    })
    headingBig.innerHTML = slideImage[swiper.previousIndex - 1].alt;
}

function rightBtnAnimation() {
    animateSlides();
    heading.forEach(function (heading) {
        heading.classList.remove('animated-one', 'animated-two');
        void heading.offsetWidth;
        heading.classList.add('animated-one');
        text.classList.remove('animated-one', 'animated-two');
        void text.offsetWidth;
        text.classList.add('animated-one');
    })
    headingBig.innerHTML = slideImage[swiper.realIndex + 1].alt;
}

nextButton.addEventListener('click', rightBtnAnimation);
prevButton.addEventListener('click', leftBtnAnimation);

//Cards
const cards = document.querySelectorAll('.card');
const cardText = document.querySelectorAll('.card-text');
const cardImage = document.querySelectorAll('.card img');

cards.forEach(function (cards, index) {
    cards.addEventListener('click', function () {
        swiper.slideTo(index + 1);
        headingBig.innerHTML = cardText[index].innerText;
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
})