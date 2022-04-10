const leftBtn = document.querySelector('.container-icon__left');
const rightBtn = document.querySelector('.container-icon__right');
const container = document.querySelector('.container');
const list = document.querySelectorAll('.album');

const currenVL = 0;
const imageVL = "img/img1.jpg";


console.dir(list);

function handleClickLeft(){
 
}

function handleClickRight(){
    if(imageVL === currenVL){
        imageVL.length + 1;
    }
}

leftBtn.addEventListener('click', handleClickLeft);
rightBtn.addEventListener('click', handleClickRight);

