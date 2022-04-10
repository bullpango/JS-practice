const leftBtn = document.querySelector('.container-icon__left');
const rightBtn = document.querySelector('.container-icon__right');
const container = document.querySelector('.container');
const list = document.querySelectorAll('.album');
let firstList = list[0];
let lastList = list[list.length -1];



console.log(lastList);

function handleClickLeft(){
console.log('goleft');
     if(list === firstList){
        
     } else {

     };
}

function handleClickRight(){
    console.log('goright');
}

leftBtn.addEventListener('click', handleClickLeft);
rightBtn.addEventListener('click', handleClickRight);

