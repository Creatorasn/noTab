const slide = document.querySelector('.wrapper__slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const dots = document.querySelectorAll('.dots__item');
const slideWidth = 960;
const animationStep = 2;
const animationStop = 380;

let slides = document.querySelectorAll('.slides__item');
let index = 1;
let disabledClick  = false;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

const activeDot = index => {
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[index].classList.add('active');
}

const animationSlide = (animationSpeed, count) => {
    const animate = () => {
        disabledClick = true;
        slide.style.left = count + "px";
        count = count - 10*animationSpeed;
        setTimeout(() =>{
            clearInterval(interval);
            disabledClick = false;
        }, animationStop);
    }
    const interval = setInterval(() => {
        animate();
    }, animationStep);
};

const getSlides = () => document.querySelectorAll('.slides__item');

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
slide.append(firstClone);
slide.prepend(lastClone);
slide.style.transform = `translateX(${-slideWidth * index}px)`;

nextBtn.addEventListener('click', () => {
    if (disabledClick === true) return false;
    slides = getSlides();
    index++;
    let animationSpeed = 1;
    let count = -slideWidth * (index - 2);
    animationSlide(animationSpeed, count);
    slides[index].id === firstClone.id && (index = 1);
    (index >= slides.length - 1) ? activeDot(0) : activeDot(index - 1);
});

prevBtn.addEventListener('click', () => {
    if (disabledClick === true) return false;
    slides = getSlides();
    index--;
    let animationSpeed = -1; 
    let count = -slideWidth * (index);
    animationSlide(animationSpeed, count);
    slides[index].id === lastClone.id && (index = slides.length - 2);
    index === 0 ? activeDot(slides.length - 3) : activeDot(index - 1);
});

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        slides = getSlides();
        let startIndex = index;
        activeDot(indexDot);
        index = indexDot + 1;
        let animationSpeed = index - startIndex;
        let count = -slideWidth * (startIndex - 1);
        animationSlide(animationSpeed, count);
    })
})
