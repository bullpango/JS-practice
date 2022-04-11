const slidewrap = document.querySelector(".container");
const slideContainer = document.querySelector(".slider-container");
const slide = document.querySelectorAll('.slide');
const navPrev = document.getElementById('prev');
const navNext = document.getElementById('next');
const slideCount = slide.length;

let currentIndex = 0;
let slideHeight = 0;

for(let i = 0; i < slideCount; i++){
    if(slideHeight < slide[i].offsetHeight){
   slideHeight = slide[i].offsetHeight;
    } 
}

slidewrap.style.height = slideHeight + 'px';
slideContainer.style.height = slideHeight + 'px';

for(let a = 0; a < slideCount; a++){
    slide[a].style.left = a * 100 + '%'
}


function goToSlide(idx){
    currentIndex = idx;
    slideContainer.style.left= -100 * idx +'%';
    slideContainer.classList.add('animated');
}

function handlePrevClick(){
    if(currentIndex == 0){
        goToSlide(slideCount -1);
    }else{
        goToSlide(currentIndex -1)
    }
}

function handleNextClick(){
if(currentIndex == slideCount -1){
    goToSlide(0);
}else{
    goToSlide(currentIndex + 1 );
}
}


navPrev.addEventListener('click',handlePrevClick);
navNext.addEventListener('click',handleNextClick);